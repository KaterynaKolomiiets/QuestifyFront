import s from './Header.module.css';
import Container from '../Container';
import ModalWindow from '../modal/ModalWindow/index';
import icons from '../../icons/sprite.svg';
import ChallengeModal from '../modal/ChallengeHeaderModal/index';

import Avatar from '@mui/material/Avatar';
import { blueGrey } from '@mui/material/colors';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';

import { getError, getUser } from '../../redux/user/selectors';
import { userLogout } from '../../redux/user/operation';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { error } from '../../redux/todos/todosSelector';

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [showChallenges, setShowChallenges] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const toggleModal = () => setShowModal(prevState => !prevState);
  const challengeModal = () => setShowChallenges(prevState => !prevState);

  const modalEscape = e => {
    if (e.code === 'Escape') {
      toggleModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', modalEscape);

    return () => {
      window.removeEventListener('keydown', modalEscape);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const err = useSelector(error);
  const authErr = useSelector(getError);
  useEffect(() => {
    if (err) Notify.failure(`Attention! ${err.message}`);
    if (authErr) Notify.failure(`Attention! ${authErr.message}`);
  }, [err]);
  
  const onLogout = () => {
    dispatch(userLogout({ email: user.email, password: user.password }));
  };

  console.log('user', user);
  const userEmail = user.email;
  const avatarLetter = userEmail.substr(0, 1).toUpperCase();

  return (
    <header className={s.headerSection}>
      <Container>
        <div className={s.header}>
          <p className={s.logo}>Questify</p>
          <div className={s.userData}>
            <Avatar sx={{ bgcolor: blueGrey[800] }} className={s.avatarLetter}>
              {avatarLetter}
            </Avatar>
            <p className={s.userName}>{user.email}</p>
          </div>
          <div className={s.userDataMobile}>
            <div className={s.avatarMobile}>
              <Avatar
                sx={{ bgcolor: blueGrey[800] }}
                className={s.avatarLetter}
              >
                {avatarLetter}
              </Avatar>
            </div>
            <button
              type="button"
              className={s.challengeIcon}
              onClick={challengeModal}
            >
              <svg width="46" height="46" className={s.challengeIconSvg}>
                <use xlinkHref={`${icons}#challenge-icon`} />
              </svg>
              {showChallenges && (
                <ChallengeModal challengeModal={challengeModal} />
              )}
            </button>
            <button type="button" className={s.BtnLogout} onClick={toggleModal}>
              <svg width="20" height="20" className={s.svgLogout}>
                <use xlinkHref={`${icons}#icon-logout`} />
              </svg>
            </button>
          </div>
        </div>
      </Container>
      {showModal && (
        <ModalWindow toggleModal={toggleModal}>
          <p className={s.modalTitle}>Are you sure you want to exit?</p>
          <div className={s.btnDiv}>
            <button type="button" className={s.modalBtn} onClick={onLogout}>
              Yes
            </button>
            <button type="button" className={s.modalBtn} onClick={toggleModal}>
              No
            </button>
          </div>
        </ModalWindow>
      )}
    </header>
  );
};

export default Header;

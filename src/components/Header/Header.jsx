import s from "./Header.module.css";
import Container from "../Container";
import ModalWindow from "../modal/ModalWindow/ModalWindow";
import BtnLogout from "../../images/btn-logout.png";
import challengeIcon from "../../images/challengeIcon.png";
import Avatar from "@mui/material/Avatar";
import { blueGrey } from "@mui/material/colors";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { getUser } from "../../redux/user/selectors";
import { userLogout } from "../../redux/user/operation";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const toggleModal = () => setShowModal((prevState) => !prevState);

  const modalEscape = (e) => {
    if (e.code === "Escape") {
      toggleModal();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", modalEscape);

    return () => {
      window.removeEventListener("keydown", modalEscape);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onLogout = () => {
    dispatch(userLogout({ email: user.email, password: user.password }));
  };

  const userEmail = user.email;
  const avatarLetter = userEmail.substr(0, 1).toUpperCase();

  return (
    <header className={s.headerSection}>
      <Container>
        <div className={s.header}>
          <p className={s.logo}>Questify</p>
          <div className={s.userData}>
            <Avatar sx={{ bgcolor: blueGrey[800] }}>{avatarLetter}</Avatar>
            <p className={s.userName}>{user.email}</p>
          </div>
          <div className={s.userDataMobile}>
            <div className={s.avatarMobile}>
              <Avatar sx={{ bgcolor: blueGrey[800] }}>{avatarLetter}</Avatar>
            </div>
            <button type="button" className={s.challengeIcon}>
              <img
                src={challengeIcon}
                alt="challengeIcon"
                className={s.challengeIconPng}
              />
            </button>
            <button type="button" className={s.BtnLogout} onClick={toggleModal}>
              <img src={BtnLogout} alt="button-logout" />
              {/* <svg width="20" height="20" className={s.svgLogout}>
                <use href="../../icons/sprite.svg#icon-logout"></use>
              </svg> */}
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

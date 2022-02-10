import s from './ModalAddCard.module.css';
import { useDispatch } from 'react-redux';

import icons from '../../../icons/sprite.svg';
import { addCardToState } from '../../../redux/todos/operation';

const ModalAddCard = ({ toggleModal }) => {
  const dispatch = useDispatch();
  const clickBackdrop = event => {
    if (event.currentTarget === event.target) {
      toggleModal();
    }
  };

  const addCard = e => {
    if (e.currentTarget.className.toString().includes('challenge')) {
      return dispatch(addCardToState('CHALLENGE'));
    }
    return dispatch(addCardToState('TASK'));
  };

  return (
    <div className={s.backdrop} onClick={toggleModal}>
      <div className={s.exitModal}>
        <div className={s.btnDiv}>
          <button
            type="button"
            className={`${s.challengeIconBtn} challenge`}
            onClick={addCard}
          >
            <svg
              width="35"
              height="35"
              className={`${s.challengeIconSvg} challenge`}
              onClick={toggleModal}
            >
              <use className="challenge" xlinkHref={`${icons}#icon-trophy`} />
            </svg>
            <p className={`${s.svgtTitle} challenge`} onClick={toggleModal}>
              challenge
            </p>
          </button>
          <button
            type="button"
            className={`${s.iconStarBtn} quest`}
            onClick={addCard}
          >
            <svg
              width="35"
              height="35"
              className={`${s.IconStarSvg} quest`}
              onClick={toggleModal}
            >
              <use xlinkHref={`${icons}#icon-star`} />
            </svg>
            <p className={`${s.svgtTitle} quest`} onClick={toggleModal}>
              quest
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalAddCard;

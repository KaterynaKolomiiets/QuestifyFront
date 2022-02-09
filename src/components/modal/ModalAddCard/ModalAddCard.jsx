import s from './ModalAddCard.module.css';
import closeBtn from '../../../images/closeBtn.png';
import icons from '../../../icons/sprite.svg';
import { useDispatch } from 'react-redux';
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
    <div className={s.backdrop} onClick={clickBackdrop}>
      <div className={s.exitModal}>
        {/* <button type="button" className={s.closeBtn} onClick={toggleModal}>
          <img src={closeBtn} alt="closeButton" />
        </button> */}
        {/* <p className={s.addCardTitle}>which card would you like to add?</p> */}
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
              onClick={addCard}
            >
              <use className="challenge" xlinkHref={`${icons}#icon-trophy`} />
            </svg>
            <p className={`${s.challengeTitle} challenge`} onClick={addCard}>
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
              onClick={addCard}
            >
              <use xlinkHref={`${icons}#icon-star`} />
            </svg>
            <p className={`${s.questTitle} quest`} onClick={addCard}>
              quest
            </p>
          </button>
        </div>
        {/* <div className={s.titleCards}>
          <p className={`${s.challengeTitle} challenge`} onClick={addCard}>
            challenge
          </p>
          <p className={`${s.questTitle} quest`} onClick={addCard}>
            quest
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default ModalAddCard;

import s from "./ModalAddCard.module.css";
import closeBtn from "../../../images/closeBtn.png";
import icons from "../../../icons/sprite.svg";

const ModalAddCard = ({ toggleModal, addCard }) => {
  const clickBackdrop = (event) => {
    if (event.currentTarget === event.target) {
      toggleModal();
    }
  };

  return (
    <div className={s.backdrop} onClick={clickBackdrop}>
      <div className={s.exitModal}>
        <button type="button" className={s.closeBtn} onClick={toggleModal}>
          <img src={closeBtn} alt="closeButton" />
        </button>
        <p className={s.addCardTitle}>which card would you like to add?</p>
        <div className={s.btnDiv}>
          <button
            type="button"
            className={s.challengeIconBtn}
            onClick={addCard}
          >
            <svg width="35" height="35" className={s.challengeIconSvg}>
              <use xlinkHref={`${icons}#icon-trophy`} />
            </svg>
          </button>
          <button type="button" className={s.iconStarBtn} onClick={addCard}>
            <svg width="35" height="35" className={s.IconStarSvg}>
              <use xlinkHref={`${icons}#icon-star`} />
            </svg>
          </button>
        </div>
        <div className={s.titleCards}>
          <p className={s.challengeTitle}>challenge</p>
          <p className={s.questTitle}>quest</p>
        </div>
      </div>
    </div>
  );
};

export default ModalAddCard;

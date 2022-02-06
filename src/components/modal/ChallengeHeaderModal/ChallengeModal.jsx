import s from "./ChallengeModal.module.css";

const ChallengeModal = ({ challengeModal }) => {
  const clickBackdrop = (event) => {
    if (event.currentTarget === event.target) {
      challengeModal();
    }
  };

  return (
    <div className={s.modal} onClick={clickBackdrop}>
      <div className={s.modalDiv}>
        <p>CHALLENGE CARDS</p>
      </div>
    </div>
  );
};

export default ChallengeModal;

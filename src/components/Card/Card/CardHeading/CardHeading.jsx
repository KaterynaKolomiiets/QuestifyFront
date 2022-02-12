import s from './CardHeading.module.css'

const CardHeading = ({ type }) => {
  return (
    <>
      {type === 'CHALLENGE' ? (
        <h2 className={s.challengeHeader}>CHALLENGE</h2>
      ) : (
        <span className={s.taskHeader}>TASK</span>
      )}
    </>
  );
};

export default CardHeading;

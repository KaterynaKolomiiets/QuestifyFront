import s from './CardInput.module.css';

const CardInput = ({ onChange, value, type }) => {
  return (
    <>
      <form className={s.form}>
        <input
          autoFocus
          className={`${s.input} ${type === 'CHALLENGE' && s.inputChallenge}`}
          type="text"
          value={value}
          onChange={onChange}
        />
      </form>
    </>
  );
};

export default CardInput;

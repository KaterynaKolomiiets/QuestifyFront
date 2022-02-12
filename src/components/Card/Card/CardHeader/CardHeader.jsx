import s from './CardHeader.module.css';

const CardHeader = ({ isActive, edit, changeHandler, level, children }) => {
  return (
    <p className={s.cardCategoryName}>
      {edit ? (
        <>
          <span
            className={
              (s.cardCategoryCircle,
              level === 'Normal'
                ? s.secondOption
                : level === 'Hard'
                ? s.thirdOption
                : s.firstOption)
            }
          >
            &#9679;
          </span>
          <span className={s.cardCategory} onClick={changeHandler}>
            {level}
          </span>
        </>
      ) : (
        <span
          className={isActive ? s.setLevel : s.inectiveCard}
          onClick={changeHandler}
        >
          <span
            className={
              (s.cardCategoryCircle,
              level === 'Normal'
                ? s.secondOption
                : level === 'Hard'
                ? s.thirdOption
                : s.firstOption)
            }
          >
            &#9679;
          </span>
          <span className={s.cardCategory}>{level}</span>
        </span>
      )}
      {children}
    </p>
  );
};

export default CardHeader;

import s from './CardIcon.module.css';
import trophy from './trophy.svg';

const CardIcon = ({ type, isActive, onMarkCompleted }) => {
  console.log(type, isActive, onMarkCompleted);

  return (
    <>
      {type === 'CHALLENGE' ? (
        <img
          src={trophy}
          alt=""
          className={isActive ? s.icon : s.icon_inective}
          onClick={onMarkCompleted}
        />
      ) : (
        <span
          className={isActive ? s.icon : s.icon_inective}
          onClick={onMarkCompleted}
        >
          {' '}
          &#9733;
        </span>
      )}
    </>
  );
};

export default CardIcon;

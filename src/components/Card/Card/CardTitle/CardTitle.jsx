import s from './CardTitle.module.css';

const CardTitle = ({ type, title }) => {
  console.log(type);
  return (
    <h2
      className={`${s.cardTitle} ${
        type === 'CHALLENGE' && s.cardTitle_challenge
      }`}
    >
      {title}
    </h2>
  );
};

export default CardTitle;

import s from './CardSelectCategory.module.css';

const CardSelectCategory = ({category, isActive, modalHandler, children}) => {
  return (
    <p
      className={`${s.cardType} 
                  ${
                    (category === 'LEARNING' && s.learning) ||
                    (category === 'LEISURE' && s.leisure) ||
                    (category === 'FAMILY' && s.family) ||
                    (category === 'HEALTH' && s.health) ||
                    (category === 'STUFF' && s.stuff) ||
                    (category === 'WORK' && s.work)
                  }
                
                  ${!isActive && s.inectiveCard}
                  `}
      onClick={modalHandler}
    >
      {children}
      {isActive && <i className={s.arrowDown}>&#9207;</i>}
    </p>
  );
};

export default CardSelectCategory;

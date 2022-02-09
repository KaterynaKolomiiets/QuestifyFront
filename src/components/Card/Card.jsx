import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteTodo,
  changeTodo,
  deleteNewTodo,
  addNewCard,
  changeTodoStatus,
} from '../../redux/todos/operation';
import '../../utils/variables.css';

import DifficultModal from '../modal/DifficultModal';
import DeleteModule from '../modal/modalDelete';
import s from './Card.module.css';
import CategoryModal from '../modal/CategoryModal';

import saveIcon from '../../images/save.svg';
import CompletedCard from '../CompletedCard/CompletedCard';
import { newTodoCard } from '../../redux/todos/todosSelector';
import ChallengeCard from '../modal/ChallengeCard/ChallengeCard';
import trophy from './trophy.svg';

const Card = ({ data, card, isNewCard }) => {
  const [categoryModal, setcategoryModal] = useState(false);
  const [modal, setmodal] = useState(false);
  const [edit, setedit] = useState(false);
  const [deleteModal, setdeleteModal] = useState(false);
  const [difficult, setdifficult] = useState('');
  const [value, setvalue] = useState('');
  const [categoryCart, setcategoryCart] = useState('family');

  const dispatch = useDispatch();
  const cardFromState = useSelector(newTodoCard);

  console.log(card);

  useEffect(() => {
    setdifficult(card.level);
    setvalue(card.title);
    setcategoryCart(card.category);
  }, []);

  function onclick() {
    setmodal(!modal);
  }

  function categoryModalHandler() {
    setcategoryModal(!categoryModal);
  }

  function change(data) {
    setdifficult(data);
    onclick();
  }
  function deleteHandler(bool) {
    if (bool) {
      dispatch(deleteTodo(card._id));
      onDelete();
    }
    onDelete();
  }

  function onDelete() {
    setdeleteModal(!deleteModal);
  }

  function onedit(e) {
    console.log(e)
    if(!card.isActive){
      return
    }
    if (!edit) setedit(true);
  }

  function changeValue(e) {
    setvalue(e.target.value);
  }

  function closeAndSave() {
    setedit(false);

    const newCard = {
      level: card.level,
      title: value,
      time: Date.now(),
      category: categoryCart,
      type: card.type,
    };
    dispatch(changeTodo({ id: card._id, ...newCard }));
  }

  function isChallenge() {
    const card = { difficult, value, isChallenge: true };
    data(card);
  }

  const deleteNewCard = () => {
    dispatch(deleteNewTodo());
  };

  const addNewTodo = () => {
    dispatch(
      addNewCard({
        title: value,
        category: categoryCart,
        type: cardFromState.type,
        time: Date.now(),
        level: difficult,
      }),
    );
  };

  const addTodosDone = () => {
    closeAndSave();
    dispatch(changeTodoStatus({ id: card._id, isActive: false }));
  };

  function changeType(data) {
    setcategoryCart(data);
    categoryModalHandler();
  }

  return (
    <>
      {/* {card.time < Date.now() ? (
        <li>
          <CompletedCard />
        </li>
      ) : ( */}


      <li
        className={`${s.card} ${
          card.type === 'CHALLENGE' ? s.challenge : s.task
        }`}
        onClick={onedit}
      >
        {modal && <DifficultModal change={change} />}
        {deleteModal && <DeleteModule change={deleteHandler} />}
        {categoryModal && <CategoryModal change={changeType} />}
        <p className={s.cardCategoryName}>
          {edit ? (
            <>
              <span
                className={
                  (s.cardCategoryCircle,
                  difficult === 'Normal'
                    ? s.secondOption
                    : difficult === 'Hard'
                    ? s.thirdOption
                    : s.firstOption)
                }
              >
                &#9679;
              </span>
              <span className={s.cardCategory} onClick={onclick}>
                {difficult}
              </span>
            </>
          ) : (
            <>
              <span
                className={
                  (s.cardCategoryCircle,
                  card.level === 'Normal'
                    ? s.secondOption
                    : card.level === 'Hard'
                    ? s.thirdOption
                    : s.firstOption)
                }
              >
                &#9679;
              </span>
              {card.isActive ? (
                <span className={s.cardCategory} onClick={onclick}>
                  {card.level}
                </span>
              ) : (
                <span className={s.cardCategory}>{card.level}</span>
              )}
            </>
          )}
          {/* STAR OR TROPHY ICON*/}
          {card.type === 'CHALLENGE' ? (
            <img
              src={trophy}
              alt=""
              className={s.cardCategoryStart}
              onClick={changeType}
            />
          ) : (
            <span className={s.cardCategoryStart}> &#9733;</span>
          )}
        </p>
        {edit && !isNewCard && <p className={s.editTitle}>edit quest</p>}
        {isNewCard && <p className={s.editTitle}>Create New Quest</p>}

        {isNewCard || edit ? (
          <form className={s.form}>
            <input
              autoFocus
              className={`${s.input} ${
                card.type === 'CHALLENGE' && s.inputChallenge
              }`}
              type="text"
              value={value}
              onChange={changeValue}
            />
          </form>
        ) : (
          <>
            {/* header CHALLENGE */}
            {card.type === 'CHALLENGE' ? (
              <h2 className={s.challengeHeader}>CHALLENGE</h2>
            ) : (
              <span className={s.taskHeader}>TASK</span>
            )}
            <h2
              className={`${s.cardTitle} ${
                card.type === 'CHALLENGE' && s.cardTitle_challenge
              }`}
            >
              {card.title}
            </h2>
          </>
        )}

        <p className={s.cardDate}>{card.time}</p>

        <div className={s.bottomMenu}>
          {edit ? (
            <>
              <p
                className={`${s.cardType} ${categoryCart.toLowerCase()}`}
                onClick={categoryModalHandler}
              >
                {categoryCart}
              </p>
            </>
          ) : (
            <>
              <p
                className={`${s.cardType} 
                  ${card.category === 'LEARNING' && s.learning}
                  ${card.category === 'LEISURE' && s.leisure}
                  ${card.category === 'FAMILY' && s.family}
                  ${card.category === 'HEALTH' && s.health}
                  ${card.category === 'STUFF' && s.stuff}
                  ${card.category === 'WORK' && s.work}`}
                onClick={categoryModalHandler}
              >
                {card.category}
              </p>
            </>
          )}

          {isNewCard && (
            <>
              <div className={s.buttons}>
                <span className={s.cross} onClick={deleteNewCard}>
                  &#10006;
                </span>
                <span onClick={addNewTodo} className={s.start}>
                  START
                </span>
              </div>
            </>
          )}
          {edit && !isNewCard && (
            <>
              <div className={s.buttons}>
                <div className={s.saveIcon} onClick={closeAndSave}>
                  <img src={saveIcon} alt="save card" />
                </div>

                <span className={s.cross} onClick={onDelete}>
                  &#10006;
                </span>
                <span onClick={addTodosDone} className={s.checked}>
                  &#10004;
                </span>
              </div>
            </>
          )}
        </div>
      </li>

      {/* )} */}
    </>
  );
};

export default Card;

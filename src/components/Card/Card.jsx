import s from './Card.module.css';

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

import { newTodoCard } from '../../redux/todos/todosSelector';

import DifficultModal from '../modal/DifficultModal';
import DeleteModule from '../modal/modalDelete';
import CategoryModal from '../modal/CategoryModal';
import TimeDatePicker from '../TimePickers';
import dateAdapted from '../TimePickers/dateAdapted';
import CompletedCard from '../CompletedCard/CompletedCard';
import CompletedChallenge from '../CompletedChallenge';
import CardHeader from './Card/CardHeader';
import CardIcon from './Card/CardHeader/CardIcon';
import CardHeading from './Card/CardHeading';
import CardTitle from './Card/CardTitle';
import CardInput from './Card/CardInput/CardInput';
import CardSelectCategory from './Card/CardSelectCategory';
import CardBottomMenu from './Card/CardBottomMenu';

const Card = ({ data, card, isNewCard, isChallengeWindow }) => {
  const [completed, setCompleted] = useState(false);
  const [categoryModal, setcategoryModal] = useState(false);
  const [modal, setmodal] = useState(false);
  const [edit, setedit] = useState(false);
  const [deleteModal, setdeleteModal] = useState(false);
  const [difficult, setdifficult] = useState('');
  const [value, setvalue] = useState('');
  const [categoryCart, setcategoryCart] = useState('family');
  const [timeDate, settimeDate] = useState(new Date());

  const dispatch = useDispatch();
  const cardFromState = useSelector(newTodoCard);

  useEffect(() => {
    setdifficult(card.level);
    setvalue(card.title);
    setcategoryCart(card.category);
    let coverct = new Date(card.time);
    coverct = dateAdapted(coverct);
    settimeDate(coverct);
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
    if (!card.isActive) {
      return;
    }
    if (!edit) setedit(true);
  }

  function changeValue(e) {
    setvalue(e.target.value);
  }

  const closeAndSave = () => {
    setedit(false);

    const newCard = {
      level: difficult,
      title: value,
      time: timeDate.data || card.time,
      category: categoryCart,
      type: card.type,
      isActive: true,
    };
    dispatch(changeTodo({ id: card._id, ...newCard }));
  };

  const deleteNewCard = () => {
    dispatch(deleteNewTodo());
  };

  const addNewTodo = () => {
    dispatch(
      addNewCard({
        title: value,
        category: categoryCart,
        type: cardFromState.type,
        time: timeDate.data,
        level: difficult,
      }),
    );
    settimeDate(dateAdapted(timeDate.data));
  };

  const addTodosDone = () => {
    dispatch(changeTodoStatus({ id: card._id, isActive: false }));
  };

  function changeType(data) {
    setcategoryCart(data);
    categoryModalHandler();
  }

  function takeTime(date) {
    settimeDate(date);
  }
  const changeCompleted = () => {
    if (!card.isActive) {
      return;
    }
    setCompleted(true);
  };

  return (
    <>
      {completed ? (
        card.type === 'TASK' ? (
          <CompletedCard
            change={addTodosDone}
            title={card.title}
            id={card._id}
          />
        ) : (
          <CompletedChallenge
            change={addTodosDone}
            title={card.title}
            id={card._id}
          />
        )
      ) : (
        <li
          className={`${s.card} ${
            card.type === 'CHALLENGE' ? s.challenge : s.task
          } ${isChallengeWindow && s.challengeModal}`}
          onClick={onedit}
        >
          {isNewCard && modal && <DifficultModal change={change} />}
          {isNewCard && categoryModal && <CategoryModal change={changeType} />}
          {card.isActive && modal && <DifficultModal change={change} />}
          {deleteModal && <DeleteModule change={deleteHandler} />}
          {card.isActive && categoryModal && (
            <CategoryModal change={changeType} />
          )}

          <CardHeader
            card={card}
            isActive={card.isActive}
            edit={edit}
            changeHandler={onclick}
            level={difficult}
            changeCompleted={changeCompleted}
            children={
              <CardIcon
                type={card.type}
                isActive={card.isActive}
                onMarkCompleted={changeCompleted}
              />
            }
          />

          {edit && !isNewCard && <p className={s.editTitle}>edit quest</p>}
          {isNewCard && <p className={s.editTitle}>Create New Quest</p>}

          {isNewCard || edit ? (
            <CardInput type={card.type} value={value} onChange={changeValue} />
          ) : (
            <>
              <CardHeading type={card.type} />
              <CardTitle type={card.type} title={card.title} />
            </>
          )}
          <div className={s.cardDate}>
            <p className={s.timeText}>
              {timeDate.dayName}
              {!edit && !isNewCard && <>,&nbsp;{timeDate.time}</>}
            </p>
            {edit && <TimeDatePicker time={takeTime} />}
            {isNewCard && <TimeDatePicker time={takeTime} />}
          </div>
          <div className={s.bottomMenu}>
            {edit || isNewCard ? (
              <CardSelectCategory
                category={card.category}
                isActive={card.isActive}
                modalHandler={categoryModalHandler}
                children={categoryCart}
              />
            ) : (
              <CardSelectCategory
                category={card.category}
                isActive={card.isActive}
                modalHandler={categoryModalHandler}
                children={card.category}
              />
            )}
            <CardBottomMenu
              isNewCard={isNewCard}
              edit={edit}
              onDeleteNew={deleteNewCard}
              onAddNew={addNewTodo}
              onCloseAndSave={closeAndSave}
              onDelete={onDelete}
              onChangeCompleted={changeCompleted}
            />
          </div>
        </li>
      )}
    </>
  );
};

export default Card;
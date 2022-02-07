import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  deleteTodo,
  changeTodo,
  deleteNewTodo,
  addNewCard,
} from "../../redux/todos/operation";
import "../../utils/variables.css";

import DifficultModal from "../modal/DifficultModal";
import DeleteModule from "../modal/modalDelete";
import s from "./Card.module.css";

const Card = ({ data, card, ondelete, isNewCard }) => {
  const [modal, setmodal] = useState(false);
  const [difficult, setdifficult] = useState("Normal");
  const [deleteModal, setdeleteModal] = useState(false);
  const [edit, setedit] = useState(false);
  const [value, setvalue] = useState("todo");

  // console.log(card);
  function onclick() {
    setmodal(!modal);
  }
  function change(data) {
    setdifficult(data);
    console.log(card);
    dispatch(changeTodo({ id: card._id, ...card, level: data }));
    onclick();
  }
  function deleteHandler(bool) {
    if (bool) {
      // ondelete(card._id);
      console.log(card._id);
      // deleteCard(card._id);
      dispatch(deleteTodo(card._id));
      onDelete();
    }
    onDelete();
  }

  function onDelete() {
    setdeleteModal(!deleteModal);
  }

  function onedit() {
    console.log(card._id);
    if (!edit) setedit(true);
  }

  function changeValue(e) {
    setvalue(e.target.value);
  }

  function closeAndSave() {
    setedit(false);

    const card = {
      difficult,
      value,
      data: Date.now(),
    };
  }

  function isChallenge() {
    const card = { difficult, value, isChallenge: true };
    data(card);
  }

  // function deleteCard(id) {
  //   dispatch(deleteTodo(id));
  // }
  const deleteNewCard = () => {
    dispatch(deleteNewTodo());
  };
  const addNewTodo = () => {
    dispatch(
      addNewCard({
        title: value,
        category: "LEISURE",
        type: "TASK",
        time: Date.now(),
        level: difficult,
      })
    );
  };
  const dispatch = useDispatch();
  console.log();
  return (
    <li className={s.card} onClick={onedit}>
      {modal && <DifficultModal change={change} />}
      {deleteModal && <DeleteModule change={deleteHandler} />}
      <p className={s.cardCategoryName}>
        <span
          className={
            (s.cardCategoryCircle,
            card.level === "Normal"
              ? s.secondOption
              : card.level === "Hard"
              ? s.thirdOption
              : s.firstOption)
          }
        >
          &#9679;
        </span>
        <span className={s.cardCategory} onClick={onclick}>
          {card.level}
        </span>
        <span className={s.cardCategoryStart} onClick={isChallenge}>
          &#9733;
        </span>
      </p>
      <p>{card._id}</p>
      {isNewCard || edit ? (
        <form className={s.form}>
          <input
            autoFocus
            className={s.input}
            type="text"
            value={value}
            placeholder={"what todo"}
            onChange={changeValue}
          />
        </form>
      ) : (
        <h2 className={s.cardTitle}>{card.title}</h2>
      )}

      <p className={s.cardDate}>{card.time}</p>
      {/* <p className={s.cardType}>type</p> */}

      <div className={s.bottomMenu}>
        <p className={`${s.cardType} ${card.category.toLowerCase()}`}>{card.category}</p>
        {isNewCard && (
          <>
            <span className={s.cross} onClick={deleteNewCard}>
              &#10006;
            </span>
            <span onClick={addNewTodo} className={s.start}>
              START
            </span>
          </>
        )}
      </div>
    </li>
  );
};

export default Card;

import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { showTodos } from "../../redux/todos/operation";
import "../../utils/variables.css";

import DifficultModal from "../modal/DifficultModal";
import DeleteModule from "../modal/modalDelete";
import s from "./Card.module.css";

const Card = ({ data }) => {
  const [modal, setmodal] = useState(false);
  const [difficult, setdifficult] = useState("Normal");
  const [deleteModal, setdeleteModal] = useState(false);
  const [edit, setedit] = useState(false);
  const [value, setvalue] = useState("todo");

  function onclick() {
    setmodal(!modal);
  }

  function change(data) {
    setdifficult(data);
    onclick();
  }

  function deleteHandler(bool) {
    if (bool) {
      alert("delete");
      onDelete();
    }
    onDelete();
  }

  function onDelete() {
    setdeleteModal(!deleteModal);
  }

  function onedit() {
    if (!edit) setedit(true);
  }

  function changeValue(e) {
    setvalue(e.target.value);
  }

  function closeAndSave() {
    setedit(false);
    const cart = {
      difficult,
      value,
      data: Date.now(),
    };
    console.log(cart);
  }

  function isChallenge() {
    const cart = { difficult, value, isChallenge: true };
    data(cart);
  }

  return (
    <li className={s.card} onClick={onedit}>
      {modal && <DifficultModal change={change} />}
      {deleteModal && <DeleteModule change={deleteHandler} />}
      <p className={s.cardCategoryName}>
        <span
          className={
            (s.cardCategoryCircle,
            difficult === "Normal"
              ? s.secondOption
              : difficult === "Hard"
              ? s.thirdOption
              : s.firstOption)
          }
        >
          &#9679;
        </span>
        <span className={s.cartCategory} onClick={onclick}>
          {difficult}
        </span>
        <span className={s.cardCategoryStart} onClick={isChallenge}>
          &#9733;
        </span>
      </p>
      {edit ? (
        <form className={s.form}>
          <input
            className={s.input}
            type="text"
            value={value}
            placeholder={"what todo"}
            onChange={changeValue}
          />
        </form>
      ) : (
        <h2 className={s.cardTitle}>{value}</h2>
      )}

      <p className={s.cardDate}>Date</p>
      {/* <p className={s.cardType}>type</p> */}

      <div className={s.bottomMenu}>
        <p className={s.cardType}>type</p>
        {edit && (
          <>
            <span className={s.cross} onClick={onDelete}>
              &#10006;
            </span>
            <span onClick={closeAndSave} className={s.start}>
              START
            </span>
          </>
        )}
      </div>
    </li>
  );
};

export default Card;

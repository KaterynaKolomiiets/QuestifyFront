import s from "./ChallengeCart.module.css";
import { useState } from "react";

import DifficultModal from "../DifficultModal";
import DeleteModule from "../modalDelete";
import icon from "./trophy.svg";
import cartsList from "../../CardsToday/temporaryData.json";

const ChallengeCart = ({ data, cart }) => {
  const [modal, setmodal] = useState(false);
  const [difficult, setdifficult] = useState("Normal");
  const [deleteModal, setdeleteModal] = useState(false);
  const [edit, setedit] = useState(false);
  const [value, setvalue] = useState("todo");

  function changeType() {
    const cart = { difficult, value, isChallenge: false };
    data(cart);
  }

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
        <img
          src={icon}
          alt=""
          className={s.cardCategoryStart}
          onClick={changeType}
        />
      </p>
      <p className={s.challenge}>edit challenge</p>
      {edit ? (
        <form className={s.form}>
          <input
            type="text"
            value={value}
            placeholder={"what todo"}
            onChange={changeValue}
            className={s.input}
          />
        </form>
      ) : (
        <h2 className={s.cardTitle}>{value}</h2>
      )}

      <p className={s.cardDate}>Date</p>
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

export default ChallengeCart;

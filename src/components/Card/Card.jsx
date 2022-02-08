import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
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
import CategoryModal from "../modal/CategoryModal";

import saveIcon from "../../images/save.svg";

const Card = ({ data, card, isNewCard }) => {
  const [categoryModal, setcategoryModal] = useState(false);
  const [modal, setmodal] = useState(false);
  const [edit, setedit] = useState(false);
  const [deleteModal, setdeleteModal] = useState(false);
  const [difficult, setdifficult] = useState("");
  const [value, setvalue] = useState("todo");
  const [categoryCart, setcategoryCart] = useState("family");

  const dispatch = useDispatch();

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

  function onedit() {
    if (!edit) setedit(true);
  }

  function changeValue(e) {
    setvalue(e.target.value);
  }

  function closeAndSave() {
    setedit(false);

    const card = {
      level: difficult,
      title: value,
      time: Date.now(),
      category: categoryCart,
      type: "TASK",
    };
    dispatch(changeTodo({ id: card._id, ...card }));
    console.log(card);
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
        category: "LEISURE",
        type: "TASK",
        time: Date.now(),
        level: difficult,
      })
    );
  };

  function changeType(data) {
    setcategoryCart(data);
    categoryModalHandler();
  }

  return (
    <li className={s.card} onClick={onedit}>
      {modal && <DifficultModal change={change} />}
      {deleteModal && <DeleteModule change={deleteHandler} />}
      {categoryModal && <CategoryModal change={changeType} />}
      <p className={s.cardCategoryName}>
        {edit ? (
          <>
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
            <span className={s.cardCategory} onClick={onclick}>
              {difficult}
            </span>
          </>
        ) : (
          <>
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
          </>
        )}

        <span className={s.cardCategoryStart} onClick={isChallenge}>
          &#9733;
        </span>
      </p>
      {edit && !isNewCard && <p className={s.editTitle}>edit quest</p>}
      {isNewCard && <p className={s.editTitle}>Create New Quest</p>}

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
              className={`${s.cardType} ${card.category.toLowerCase()}`}
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
              <span onClick={closeAndSave} className={s.checked}>
                &#10004;
              </span>
            </div>
          </>
        )}
      </div>
    </li>
  );
};

export default Card;

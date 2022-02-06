import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { showTodos } from "../../redux/todos/operation";
import "../../utils/variables.css";

import s from "./Card.module.css";

const Card = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <>
      <p className={s.cardCategoryName}>
        <span className={s.cardCategoryCircle}>&#9679;</span>
        {todo.level}
        <span className={s.cardCategoryStart}>&#9733;</span>
      </p>
      <h2 className={s.cardTitle}>{todo.title}</h2>
      <p className={s.cardDate}>{todo.updatedAt}</p>
      <p className={s.cardType}> {todo.category}</p>
    </>
  );
};

export default Card;

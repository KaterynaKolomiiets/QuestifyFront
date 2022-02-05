import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { showTodos } from "../../redux/todos/operation";
import "../../utils/variables.css";

import s from "./Card.module.css";

const Card = () => {
  const name = useSelector((state) => state.user.name);
  const dispatch = useDispatch();
  console.log(name);
  useEffect(() => {
    dispatch(showTodos());
  }, []);

  return (
    <>
      <p className={s.cardCategoryName}>
        <span className={s.cardCategoryCircle}>&#9679;</span>
        Normal
        <span className={s.cardCategoryStart}>&#9733;</span>
      </p>
      <h2 className={s.cardTitle}>Todo name</h2>
      <p className={s.cardDate}>Date</p>
      <p className={s.cardType}>type</p>
    </>
  );
};

export default Card;

import { useDispatch } from "react-redux";
import {
  addCardToState,
  addTodo,
  showTodosActive,
  showTodosDone,
} from "../../redux/todos/operation";
import "../../utils/variables.css";
import Card from "../Card";
import s from "./ButtonAddCard.module.css";

const ButtonAddCard = () => {
  const dispatch = useDispatch();

  const addCard = () => {
    dispatch(addCardToState());
    // addTodo({
    //   title: "Enter your data",
    //   category: "FAMILY",
    //   type: "TASK",
    //   time: Date.now(),
    //   level: "Normal",
    // });
  };

  return (
    <button className={s.ButtonAddCard} type="button" onClick={addCard}>
      +
    </button>
  );
};

export default ButtonAddCard;

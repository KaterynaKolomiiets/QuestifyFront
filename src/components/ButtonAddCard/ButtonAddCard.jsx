import { useDispatch } from "react-redux";
import {
  addTodo,
  showTodosActive,
  showTodosDone,
} from "../../redux/todos/operation";
import "../../utils/variables.css";
import s from "./ButtonAddCard.module.css";

const ButtonAddCard = () => {
  const dispatch = useDispatch();
  const addCard = () => {
    dispatch(
      addTodo({
        title: "first card",
        category: "FAMILY",
        type: "TASK",
        time: Date.now(),
        isActive: true,
        level: "Normal",
      })
    );
  };
  return (
    <button className={s.ButtonAddCard} type="button" onClick={addCard}>
      +
    </button>
  );
};

export default ButtonAddCard;

import Card from "../Card";

import "../../utils/variables.css";
import s from "./CardsToday.module.css";
import { useSelector } from "react-redux";
import { todosActive } from "../../redux/todos/todosSelector";

const CardsToday = () => {
  const todos = useSelector(todosActive);

  return (
    <section className={s.section}>
      <h2 className={s.title}>Today</h2>
      <ul className={s.cardSet}>
        {todos?.map((todo) => (
          <li className={s.card}>
            <Card todo={todo} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CardsToday;

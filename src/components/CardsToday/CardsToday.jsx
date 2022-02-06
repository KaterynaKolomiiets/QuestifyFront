import Card from "../Card";

import "../../utils/variables.css";
import s from "./CardsToday.module.css";
import { useSelector } from "react-redux";

const CardsToday = () => {
  const todos = useSelector((state) => state.todos);

  console.log(todos);
  return (
    <section className={s.section}>
      <h2 className={s.title}>Today</h2>

      <ul className={s.cardSet}>
        {todos.map((todo) => (
          <li className={s.card}>
            <Card todo={todo} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CardsToday;

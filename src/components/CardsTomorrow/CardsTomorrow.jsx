import Card from "../Card";

import "../../utils/variables.css";
import s from "./CardsTomorrow.module.css";

const CardsTomorrow = () => {
  return (
    <section className={s.section}>
      <h2 className={s.title}>Tomorrow</h2>

      <ul className={s.cardSet}>
        <li className={s.card}>
          <Card />
        </li>
        <li className={s.card}>
          <Card />
        </li>
        <li className={s.card}>
          <Card />
        </li>
        <li className={s.card}>
          <Card />
        </li>
        <li className={s.card}>
          <Card />
        </li>
        <li className={s.card}>
          <Card />
        </li>
      </ul>
    </section>
  );
};

export default CardsTomorrow;

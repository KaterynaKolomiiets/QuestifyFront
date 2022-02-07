import Card from "../Card";

import "../../utils/variables.css";
import s from "./CardsToday.module.css";

import { useDispatch, useSelector } from "react-redux";
import { todosActive } from "../../redux/todos/todosSelector";
import { useState } from "react";
import ChallengeCard from "../modal/ChallengeCard";
import { deleteTodo, changeTodo } from "../../redux/todos/operation";

const CardsToday = () => {
  const todos = useSelector(todosActive);
  const [isChallenge, setChallenger] = useState(true);
  // const [cards, setCards] = useState(todos);

  function takeData(card) {
    setChallenger(card.isChallenge);
  }

  // function deleteCard(id) {
  //   dispatch(deleteTodo(id));
  // }

  // const dispatch = useDispatch();

  return (
    <section className={s.section}>
      <h2 className={s.title}>Today</h2>
      {/* <ul className={s.cardSet}> */}
      {/* {todos?.map((todo) => (
          <Card todo={todo} />
        ))} */}

      <ul className={s.cardSet}>
        {todos?.map((card) => {
          return card.isChallenge ? (
            <ChallengeCard
              key={card._id}
              card={card}
              data={takeData}
              // delete={deleteCard}
            />
          ) : (
            <Card
              key={card._id}
              card={card}
              data={takeData}
              // ondelete={deleteCard}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default CardsToday;

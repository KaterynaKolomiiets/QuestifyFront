import Card from "../Card";

import "../../utils/variables.css";
import s from "./CardsToday.module.css";

import { useDispatch, useSelector } from "react-redux";
import { newTodoCard, todosActive } from "../../redux/todos/todosSelector";
import { useEffect, useState } from "react";
import ChallengeCard from "../modal/ChallengeCard/ChallengeCard";

import data from "./temporaryData.json";

import {
  deleteTodo,
  changeTodo,
  showTodosActive,
  showTodosDone,
} from "../../redux/todos/operation";
import { date } from "check-types";


const CardsToday = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showTodosActive());
    dispatch(showTodosDone());
  }, []);

  const todos = useSelector(todosActive);
  const newTodo = useSelector(newTodoCard);
  let isNewCard = newTodo ? true : false;

  // const todos = newTodo ? [newTodo, ...initialTodos] : initialTodos;

  const [isChallenge, setChallenger] = useState(true);
  // const [cards, setCards] = useState(todos);

  function takeData(card) {
    setChallenger(card.isChallenge);
  }

  // function deleteCard(id) {
  //   dispatch(deleteTodo(id));
  // }

  // const dispatch = useDispatch();

  // console.log(todos);

  const dayNow = new Date(Date.now()).getDate();
  const monthNow = new Date(Date.now()).getMonth();
  const yearNow = new Date(Date.now()).getFullYear();

  const checkIfToday = (date) => {

    const year = new Date(date).getFullYear();
    const month = new Date(date).getMonth();
    const day = new Date(date).getDate();

    return (year === yearNow ) && (month === monthNow) && ((day === dayNow) && true) 
  }


  return (
    <>
      <section className={s.section}>
      <h2 className={s.title}>Today</h2>
      <ul className={s.cardSet}>
        {isNewCard && (
          <Card
            key={newTodo._id}
            card={newTodo}
            // data={takeData}
            isNewCard={isNewCard}
          />
        )}
        {todos?.map(card => {
          if (checkIfToday(card.time)) {
            return <Card key={card._id}
              card={card}
          data={takeData} />
          }
        })}
      </ul>
      </section>
      <section className={s.section}>
      <h2 className={s.title}>Tomorrow</h2>
      <ul className={s.cardSet}>
        {isNewCard && (
          <Card
            key={newTodo._id}
            card={newTodo}
            // data={takeData}
            isNewCard={isNewCard}
          />
        )}
        {todos?.map(card => {
          if (!checkIfToday(card.time)) {
            return <Card key={card._id}
              card={card}
          data={takeData} />
          }
        })}
      </ul>
      </section>
    </>
  );
};

export default CardsToday;

import Card from '../Card';

import '../../utils/variables.css';
import s from './CardsToday.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { newTodoCard, todosActive } from '../../redux/todos/todosSelector';
import { useEffect, useState } from 'react';
import ChallengeCard from '../modal/ChallengeCard/ChallengeCard';

import data from './temporaryData.json';

import {
  deleteTodo,
  changeTodo,
  showTodosActive,
  showTodosDone,
} from '../../redux/todos/operation';

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

  console.log(todos);

  return (
    <section className={s.section}>
      <h2 className={s.title}>Today</h2>
      <ul className={s.cardSet}>
        {isNewCard && (
          <Card key={newTodo._id} card={newTodo} isNewCard={isNewCard} />
        )}
        {/* new code KATERYNA */}

        {todos?.map(card => (
          <Card key={card._id} card={card} />
        ))}

        {/* COMMENTED BY KATERYNA */}

        {/* {todos?.map((card) => {
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
        })} */}
        {/* COMMENTED BY KATERYNA */}
      </ul>

      {/* RENDER TODOS */}

      {/* <ul className={s.cardSet}>
        {todos?.map((todo) => (
          <Card todo={todo} />
        ))}
      </ul> */}

      {/* <ul className={s.cardSet}> */}
      {/* {todos?.map((card) => {
          return card.isChallenge ? (
            <ChallengeCard key={card._id} card={card} data={takeData} delete={deleteCard}/>
          )})} */}
      {/* </ul> */}

      {/* <ul className={s.cardSet}>
        {todos?.map((item) => {
          console.log(item.type);
        })}
        {todos?.map((todo) => (
          <Card todo={todo} />
        ))}
        {data.map((card) => {
          return card.type === "CHALLENGE" ? (
            <ChallengeCard key={card._id} card={card} data={takeData} />
          ) : (
            <Card
              key={card._id}
              card={card}
              data={takeData}
              // ondelete={deleteCard}
            />
          );
        })}
      </ul> */}
    </section>
  );
};

export default CardsToday;

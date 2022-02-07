import Card from "../Card";

import "../../utils/variables.css";
import s from "./CardsToday.module.css";

import { useSelector } from "react-redux";
import { todosActive } from "../../redux/todos/todosSelector";
import { useState } from "react";
import ChallengeCard from "../modal/ChallengeCard";
import data from "./temporaryData.json";




  const CardsToday = () => {
    const todos = useSelector(todosActive);
    console.log(todos)
  const [isChallenge, setChallenger] = useState(true);
  const [carts, setCarts] = useState(data);

  function takeData(cart) {
    console.log(cart);
    setChallenger(cart.isChallenge);
  }


  return (
    <section className={s.section}>
      <h2 className={s.title}>Today</h2>
    <ul className={s.cardSet}>
      {todos?.map((item) => (
            <Card todo={item} />
      ))} 
        </ul>

      {/* <ul className={s.cardSet}>
        {todos?.map((item) => {
          console.log(item.type)
        })}
        {todos?.map((todo) => (
            <Card todo={todo} />
        ))} 
        {data.map((cart) => {
          return cart.isChallenge ? (
            <ChallengeCard key={cart.id} cart={cart} data={takeData} />
          ) : (
            <Card key={cart.id} cart={cart} data={takeData} />
          );
        })}
      </ul> */}
    </section>
  );
};

export default CardsToday;

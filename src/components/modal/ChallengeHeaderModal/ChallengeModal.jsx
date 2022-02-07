import s from "./ChallengeModal.module.css";

import { useSelector } from "react-redux";
import { todosActive } from "../../../redux/todos/todosSelector";
import { useState } from "react";

const ChallengeModal = ({ challengeModal }) => {
  const todos = useSelector(todosActive);
  console.log("todos", todos);

  const clickBackdrop = (event) => {
    if (event.currentTarget === event.target) {
      challengeModal();
    }
  };

  return (
    <div className={s.modal} onClick={clickBackdrop}>
      <div className={s.modalDiv}>
        {/* <ul>
          {todos.map((item) => {
            <li id={item._id} className={s.listItem}>
              <h2 className={s.itemTitle}>{item.title}</h2>
              <p className={s.itemTime}>{item.time}</p>
              <p className={s.itemCategory}>{item.category}</p>
            </li>;
          })}
        </ul> */}
        <ul>
          <li className={s.listItem}>
            <h2 className={s.itemTitle}>visit the dentist</h2>
            <p className={s.itemTime}>Today, 7:30</p>
            <p className={s.itemCategory}>HEALTH</p>
          </li>
          <li className={s.listItem}>
            <h2 className={s.itemTitle}>reed a book</h2>
            <p className={s.itemTime}>Wednesday, 15:00</p>
            <p className={s.itemCategory}>LEARNING</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ChallengeModal;

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
        <p>Challenges</p>
        {/* <ul>
          {todos.map((item) => {
            <li id={item._id} className={s.listItem}>
              <p className={s.itemTitle}>{item.title}</p>
              <p className={s.itemTime}>{item.time}</p>
              <p className={s.itemCategory}>{item.category}</p>
            </li>;
          })}
        </ul> */}
        <ul>
          <li className={s.listItem}>
            <p className={s.itemTitle}>Visit the dentist</p>
            <p className={s.itemTime}>Today, 7:30</p>
            <p className={s.itemCategory}>FAMILY</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ChallengeModal;

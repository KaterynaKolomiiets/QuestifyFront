import s from "./ChallengeModal.module.css";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { todosActive } from "../../../redux/todos/todosSelector";
import { showTodosActive } from "../../../redux/todos/operation";

const ChallengeModal = ({ challengeModal }) => {
  const todos = useSelector(todosActive);
  const dispatch = useDispatch();
  console.log("todos", todos);

  const clickBackdrop = (event) => {
    if (event.currentTarget === event.target) {
      challengeModal();
    }
  };

  useEffect(() => {
    dispatch(showTodosActive());
  }, []);

  return (
    <div className={s.modal} onClick={clickBackdrop}>
      <div className={s.modalDiv}>
        {/* <ul>
          {todos.map((item) => {
            <li key={item._id} className={s.listItem}>
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
            <h2 className={s.itemTitle}>read a book</h2>
            <p className={s.itemTime}>Wednesday, 15:00</p>
            <p className={s.itemCategory}>LEARNING</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ChallengeModal;

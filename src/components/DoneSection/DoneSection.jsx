import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showTodosDone } from "../../redux/todos/operation";
import { todosDone } from "../../redux/todos/todosSelector";
import Card from "../Card";

import Icon from "../Icon";
import s from "./DoneSection.module.css";

const DoneSection = () => {
  const [doneIsShown, setDoneIsShown] = useState(false);
  const todos = useSelector(todosDone);
  const onShowDone = () => {
    setDoneIsShown(!doneIsShown);
  };
  
  return (
    <>
      <section className={s.section}>
        <div>
          <div className={s.lineWrapper}></div>
          <button className={s.btnDone} onClick={onShowDone}>
            DONE
            <Icon className={s.IconDone} name={doneIsShown ? "arrow-down" : "arrow-up"} size={12} />
          </button>
          {doneIsShown && todos && (
            <ul className={s.cardSet}>
              {todos?.map((card) => {
                return <Card key={card._id} card={card} />;
              })}
            </ul>
          )}
          </div>
      </section>
    </>
  );
};

export default DoneSection;

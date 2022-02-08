import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showTodosDone } from "../../redux/todos/operation";
import { todosDone } from "../../redux/todos/todosSelector";
import Card from "../Card";

import Icon from "../Icon";
import s from "./DoneSection.module.css";

const DoneSection = () => {
  const dispatch = useDispatch();
  const todos = useSelector(todosDone);
  // useEffect(() => {
  //   dispatch(showTodosDone());
  //   console.log("kokpok");
  // }, []);
  console.log(todos);
  return (
    <>
      <section className={s.sectionDone}>
        <div className={s.lineWrapper}>
          <button className={s.btnDone}>
            DONE
            <Icon className={s.IconDone} name={"arrow-up"} size={12} />
          </button>
          {todos && (
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

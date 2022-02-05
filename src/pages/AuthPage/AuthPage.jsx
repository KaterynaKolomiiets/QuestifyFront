import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import Container from "../../components/Container";
import { userLogin, userRegistration } from "../../redux/user/operation";

import s from "./AuthPage.module.css";
import {
  showTodos,
  showTodosActive,
  showTodosDone,
} from "../../redux/todos/operation";

function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const card = useSelector((state) => state.todos);
  console.log(card);
  const dispatch = useDispatch();

  const updateState = ({ target: { name, value } }) => {
    switch (name) {
      case "user-email":
        setEmail(value);
        break;
      case "user-password":
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const register = (e) => {
    console.log(e);
    e.preventDefault();
    dispatch(
      userLogin({ email: "andreikiv.ann@gmail.com", password: "12345" })
    );
    setEmail("");
    setPassword("");
  };
  const show = async () => {
    const data = await dispatch(showTodosDone());
    console.log(data);
  };
  return (
    <div className={s.wrapper}>
      <Container>
        <section className={s.landing}>
          <h1 className={s.title}>Questify</h1>

          <p className={s.txt__top}>
            Questify will turn your life into a thrilling game full of amazing
            quests and exciting challenges.
          </p>

          <p className={s.txt__bottom}>Choose your name to sign up or log in</p>

          <form className={s.auth_form} onSubmit={register}>
            <input
              type="text"
              name="user-email"
              className={s.auth_form_input}
              placeholder="Email"
              required
              value={email}
              onChange={updateState}
            />
            <input
              type="text"
              name="user-password"
              className={s.auth_form_input}
              placeholder="Password"
              required
              value={password}
              onChange={updateState}
            />
            <button type="submit" className={s.auth_form_button}>
              go!
            </button>
            {/* TO DELETE BELOW */}
            <button
              type="button"
              onClick={
                // const a = await axios.get(
                //   `http://questify-project.herokuapp.com/api/todos/all`
                // );
                show
              }
            >
              PressMe
            </button>
            {/* TO DELETE ABOVE */}
          </form>
        </section>
      </Container>
    </div>
  );
}

export default AuthPage;

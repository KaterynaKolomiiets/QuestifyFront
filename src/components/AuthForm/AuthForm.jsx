import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import {
  deleteTodo,
  showTodosActive,
  showTodosDone,
  changeTodoStatus,
  changeTodo,
} from "../../redux/todos/operation";

import { userLogin, userRegistration } from "../../redux/user/operation";

import s from "./AuthForm.module.css";

function AuthForm({ showRegisterForm }) {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showRegForm, setShowRegForm] = useState(showRegisterForm);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  useEffect(() => {
    setShowRegForm(showRegisterForm);
  }, [showRegisterForm]);

  const changeNameValue = (event) => setName(event.target.value);
  const changeEmailValue = (event) => setEmail(event.target.value);
  const changePasswordValue = (event) => setPassword(event.target.value);
  const togglePasswordVisibility = () => isPasswordVisible ? setIsPasswordVisible(false) : setIsPasswordVisible(true);

  const validateEmail = (email) => {
    const response =
      /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return response.test(email);
  };

  const validatePassword = (password) => {
    return Boolean(password.length > 3 && password.length < 17);
  };
  
  const onRegistration = () => {
    !validateEmail(email)
    ? setEmailError("Некорректно введен e-mail.")
    : setEmailError("");
    
    !validatePassword(password)
    ? setPasswordError("Пароль должен быть от 4 до 16 символов.")
      : setPasswordError("");
      
    if (validateEmail(email) && validatePassword(password)) {
      setShowRegForm(false);
      dispatch(userRegistration({ email, password }))
      // dispatch(userRegistration({ name, email, password }))
      alert('Вам на email отправлено письмо. Подтвердите регистрацию !');
    }
  };
  
  const onLogin = () => {
    !validateEmail(email)
    ? setEmailError('Некорректно введен e-mail.')
    : setEmailError('');
    
    !validatePassword(password)
    ? setPasswordError('Пароль должен быть от 4 до 16 символов.')
    : setPasswordError('');
    
    if (validateEmail(email) && validatePassword(password)) {
      dispatch(userLogin({ email, password}))
    }
  };

  // const onLogin = async () => {
  //   await dispatch(
  //     userLogin({ email: "andreikiv.ann@gmail.com", password: "12345" })
  //   );
  // };
  
  const showCards = () => {
    dispatch(showTodosDone());
    dispatch(showTodosActive());
  };

  const deleteCard = () => {
    dispatch(deleteTodo("61fee92bf6f84c3f97f8cec5"));
  };

  const changeStatus = () => {
    dispatch(
      changeTodoStatus({ id: "62001a1b4cbffc8d5811eba1", isActive: false })
    );
  };

  const changeCard = () => {
    dispatch(
      changeTodo({
        id: "620021844cbffc8d5811ebfe",
        title: "test",
        category: "STUFF",
        type: "TASK",
        time: "04/11/2022",
        isActive: true,
        level: "Easy",
      })
    );
  };

  return (
    <form className={s.auth_form} autoComplete="off">
      {/* И Н П У Т   И М Я */}
      {
        showRegForm &&
        <input
          type="text"
          name="name"
          value={name}
          onChange={changeNameValue}
          placeholder="Name"
          className={s.auth_form_input}
          required
        />
      }

      {/* И Н П У Т   И М Е Й Л */}
      <input
        type="email"
        name="email"
        value={email}
        onChange={changeEmailValue}
        pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
        placeholder="Email"
        className={s.auth_form_input}
        required
      />
      <p className={s.errorMessage}>{emailError}</p>

      {/* И Н П У Т   П А Р О Л Ь */}
      <input
        type={isPasswordVisible ? 'text' : 'password'}
        name="password"
        value={password}
        onChange={changePasswordValue}
        placeholder="Password"
        className={s.auth_form_input}
        required
      />
      {
        isPasswordVisible
        ?
        <VisibilityIcon className={s.show_hide_password} onClick={togglePasswordVisibility} />
        :
        <VisibilityOffIcon className={s.show_hide_password} onClick={togglePasswordVisibility} />
      }
      <p className={s.errorMessage}>{passwordError}</p>

      {/* К Н О П К А   g o ! */}
      {
        showRegForm
          ?
        <button
          className={s.auth_form_button}
          type="button"
          onClick={onRegistration}
        >
          reg
        </button>
          :
        <button
          className={s.auth_form_button}
          type="button"
          onClick={onLogin}
        >
          log
        </button>
      }
    </form>
  );
}

export default AuthForm;

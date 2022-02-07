import axios from "axios";

import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { userLogin } from '../../redux/user/operation'

import s from './AuthForm.module.css';

function LoginForm() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const changeEmailValue = (event) => setEmail(event.target.value);
  const changePasswordValue = (event) => setPassword(event.target.value);

  const onLogin = (event) => {
    event.preventDefault();

    !validateEmail(email)
      ? setEmailError('Некорректно введен e-mail.')
      : setEmailError('');

    !validatePassword(password)
      ? setPasswordError('Пароль должен быть от 4 до 16 символов.')
      : setPasswordError('');

    if (validateEmail(email) && validatePassword(password)) {
      // dispatch(userLogin({ email, password}))
       dispatch(userLogin({ email, password}))
    }
  };

  const validateEmail = (email) => {
    const response =
      /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return response.test(email);
  };

  const validatePassword = (password) => {
    return Boolean(password.length > 3 && password.length < 17);
  };

  return (
    <form onSubmit={onLogin} className={s.auth_form}>
      {/* И Н П У Т   И М Е Й Л */}
      <input
        type='email'
        name='email'
        id='AuthForm__email'
        value={email}
        onChange={changeEmailValue}
        pattern='[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$'
        placeholder='Email'
        className={s.auth_form_input}
        autoComplete="off"
        required
      />
      <p className={s.errorMessage}>{emailError}</p>
      {/* И Н П У Т   П А Р О Л Ь */}
      <input
        type='password'
        name='password'
        id='AuthForm__password'
        value={password}
        onChange={changePasswordValue}
        placeholder='Password'
        className={s.auth_form_input}
        autoComplete="off"
        required
      />
      <p className={s.errorMessage}>{passwordError}</p>

      <div>
        {/* К Н О П К И */}
        <button className={s.auth_form_button} type='submit'>
          log
        </button>

        {/* TO DELETE BELOW */}
        {/* <button
          type="button"
          onClick={async () => {
            const a = await axios.get(`http://questify-project.herokuapp.com/api/todos/all`);
          }}
        >
          PressMe
        </button>       */}
        {/* TO DELETE ABOVE */}

      </div>
    </form>
  );
}

export { LoginForm };

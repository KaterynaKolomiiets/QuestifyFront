import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import { getError } from '../../redux/user/selectors';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import { userLogin, userRegistration } from '../../redux/user/operation';

import s from './AuthForm.module.css';
import { Link } from 'react-router-dom';

function AuthForm({ showRegisterForm }) {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [showRegForm, setShowRegForm] = useState(showRegisterForm);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const authErr = useSelector(getError);
  useEffect(() => {
    setShowRegForm(showRegisterForm);
  }, [showRegisterForm]);

  const changeNameValue = event => setName(event.target.value);
  const changeEmailValue = event => setEmail(event.target.value);
  const changePasswordValue = event => setPassword(event.target.value);
  const togglePasswordVisibility = () =>
    isPasswordVisible
      ? setIsPasswordVisible(false)
      : setIsPasswordVisible(true);

  const validateEmail = email => {
    const response =
      /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return response.test(email);
  };

  const validatePassword = password => {
    return Boolean(password.length > 3 && password.length < 17);
  };

  const onRegistration = event => {
    event.preventDefault();

    !validateEmail(email)
      ? setEmailError('Некорректно введен e-mail')
      : setEmailError('');

    !validatePassword(password)
      ? setPasswordError('Пароль должен быть от 4 до 16 символов')
      : setPasswordError('');

    if (validateEmail(email) && validatePassword(password)) {
      setShowRegForm(false);
      dispatch(userRegistration({ name, email, password }));
      if (!authErr)
        return Notiflix.Notify.info(
          'На email отправлено письмо для подтверждения регистрации',
        );
    }
  };

  const onLogin = event => {
    event.preventDefault();

    !validateEmail(email)
      ? setEmailError('Некорректно введен e-mail')
      : setEmailError('');

    !validatePassword(password)
      ? setPasswordError('Пароль должен быть от 4 до 16 символов')
      : setPasswordError('');

    if (validateEmail(email) && validatePassword(password)) {
      dispatch(userLogin({ email, password }));
    }
  };

  return (
    <form
      className={s.auth_form}
      onSubmit={showRegForm ? onRegistration : onLogin}
      autoComplete="off"
    >
      {/* И Н П У Т   И М Я */}
      {showRegForm && (
        <input
          type="text"
          name="name"
          value={name}
          onChange={changeNameValue}
          placeholder="Name"
          className={s.auth_form_input}
          autoComplete="off"
          required
        />
      )}

      {/* И Н П У Т   И М Е Й Л */}
      <input
        type="email"
        name="email"
        value={email}
        onChange={changeEmailValue}
        pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
        placeholder="Email"
        className={s.auth_form_input}
        autoComplete="off"
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
        autoComplete="off"
        required
      />
      {isPasswordVisible ? (
        <VisibilityIcon
          className={s.show_hide_password}
          onClick={togglePasswordVisibility}
        />
      ) : (
        <VisibilityOffIcon
          className={s.show_hide_password}
          onClick={togglePasswordVisibility}
        />
      )}
      <p className={s.errorMessage}>{passwordError}</p>
      <Link to="/reset" className={s.forgotPassword}>
        Forgot Password?
      </Link>
      {/* К Н О П К А   g o ! */}

      <button className={s.auth_form_button} type="submit">
        go!
      </button>
    </form>
  );
}

export default AuthForm;

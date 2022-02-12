import s from './ChangePassword.module.css';

import { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userChangePassword } from '../../redux/user/operation';
import { getError } from '../../redux/user/selectors';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import Container from '../../components/Container';

function ChangePassword() {
  const dispatch = useDispatch();
  const error = useSelector(getError);
  const history = useHistory();
  const firstUpdate = useRef(true);

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const changePasswordValue = event => setPassword(event.target.value);
  const changeConfirmPasswordValue = event =>
    setConfirmPassword(event.target.value);
  const togglePasswordVisibility = () =>
    isPasswordVisible
      ? setIsPasswordVisible(false)
      : setIsPasswordVisible(true);

  const validatePassword = password => {
    return Boolean(password.length > 3 && password.length < 17);
  };

  const location = useLocation();
  const link = location.pathname.slice(location.pathname.indexOf('d/') + 2);

  const onSubmit = () => {
    !validatePassword(password)
      ? setPasswordError('Пароль должен быть от 4 до 16 символов.')
      : setPasswordError('');

    if (password !== confirmPassword)
      return setPasswordError('Пароли не совпадают');

    if (validatePassword(password)) {
      dispatch(userChangePassword({ password, link }));
    }
  };

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    if (error) {
      return Notify.failure(`${error.message}`);
    } else if (error === '' && firstUpdate.current === false) {
      Notify.success(
        'Your password change! You will be redirect to the authorization page in 5s',
      );

      setTimeout(() => {
        history.push('/auth');
      }, 5000);
    }
  }, [error]);

  return (
    <div className={s.wrapper}>
      <Container>
        <section className={s.landing}>
          <h1 className={s.title}>Questify</h1>

          <p className={s.txt__top}>
            Questify will turn your life into a thrilling game full of amazing
            quests and exciting challenges.
          </p>

          <p className={s.txt__bottom}>Please, type your your new password!</p>
          <form className={s.reset_form} autoComplete="off">
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              name="password"
              value={password}
              onChange={changePasswordValue}
              placeholder="New password"
              className={s.reset_form_input}
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

            <input
              type="password"
              name="password"
              value={confirmPassword}
              onChange={changeConfirmPasswordValue}
              placeholder="Confirm password"
              className={s.reset_form_input}
              required
            />

            <button
              className={s.reset_form_button}
              type="button"
              onClick={onSubmit}
            >
              go!
            </button>
          </form>
        </section>
      </Container>
    </div>
  );
}

export default ChangePassword;

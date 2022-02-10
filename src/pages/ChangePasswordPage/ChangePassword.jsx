
import { useState } from 'react';
import Container from "../../components/Container";
import s from "./ChangePassword.module.css";
import { userChangePassword} from '../../redux/user/operation'
import { useDispatch } from 'react-redux';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useLocation } from 'react-router-dom';


function ChangePassword() {
  const dispatch = useDispatch();
 
  
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
   const [isPasswordVisible, setIsPasswordVisible] = useState(false);

 const changePasswordValue = (event) => setPassword(event.target.value);
 const changeConfirmPasswordValue = (event) => setConfirmPassword(event.target.value);
  const togglePasswordVisibility = () => isPasswordVisible ? setIsPasswordVisible(false) : setIsPasswordVisible(true);

  const validatePassword = (password) => {
    return Boolean(password.length > 3 && password.length < 17);
  };

  
  const location = useLocation()
  const link = location.pathname.slice(location.pathname.indexOf('d/') + 2);
  
  
  const onSubmit = () => {

    
    !validatePassword(password)
    ? setPasswordError("Пароль должен быть от 4 до 16 символов.")
      : setPasswordError("");
     
    if (password !== confirmPassword) return setPasswordError("Пароли не совпадают")
      
    if (validatePassword(password)) {
      dispatch(userChangePassword({ password, link }))
      // dispatch(userRegistration({ name, email, password }))
      alert('Вам на email отправлено письмо. Подтвердите регистрацию !');
    }
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

          <p className={s.txt__bottom}>
            Please, type your your new password!
          </p>

          {/* <resetForm showRegisterForm={ showRegisterForm }/> */}
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
      {
        isPasswordVisible
        ?
        <VisibilityIcon className={s.show_hide_password} onClick={togglePasswordVisibility} />
        :
        <VisibilityOffIcon className={s.show_hide_password} onClick={togglePasswordVisibility} />
      }
            <p className={s.errorMessage}>{passwordError}</p>
            
      <input
        type='password'
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

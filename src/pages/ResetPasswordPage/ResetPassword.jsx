
import { useState } from 'react';
import Container from "../../components/Container";
import s from "./ResetPassword.module.css";
import { userResetPassword} from '../../redux/user/operation'
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

function ResetPassword() {
  const dispatch = useDispatch();
 
  
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const changeEmailValue = (event) => setEmail(event.target.value);

  const validateEmail = (email) => {
    const response =
      /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return response.test(email);
  };

  
  
  const onSubmit = () => {
    !validateEmail(email)
    ? setEmailError("Некорректно введен e-mail.")
    : setEmailError("");
      
    if (validateEmail(email)) {
      dispatch(userResetPassword({ email }))
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
            Please, type your email to reset password!
          </p>

          {/* <resetForm showRegisterForm={ showRegisterForm }/> */}
          <form className={s.reset_form} autoComplete="off">
          <input
        type="email"
        name="email"
        value={email}
        onChange={changeEmailValue}
        pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
        placeholder="Email"
        className={s.reset_form_input}
        required
      />
          <p className={s.errorMessage}>{emailError}</p>
          
          <button
          className={s.reset_form_button}
          type="button"
          onClick={onSubmit}
        >
          Go
            </button>
            </form>
        </section>
      </Container>
    </div>
  );
}

export default ResetPassword;

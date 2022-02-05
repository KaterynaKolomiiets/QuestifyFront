import Container from "../../components/Container";
import AuthForm from '../../components/AuthForm';

import s from './AuthPage.module.css';

function AuthPage() {
  return (
    <div className={s.wrapper}>
      <Container>
        <section className={s.landing}>
          <h1 className={s.title}>
            Questify
            </h1>
            
          <p className={s.txt__top}>
            Questify will turn your life into
            a thrilling game full of amazing
            quests and exciting challenges.
          </p>

          <p className={s.txt__bottom}>
            Choose your name to sign up or log in
          </p>

          <AuthForm />
        </section>
      </Container>
    </div>
  );
}

export default AuthPage;

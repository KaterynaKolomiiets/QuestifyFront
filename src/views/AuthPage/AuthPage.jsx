import s from './AuthPage.module.css';

function AuthPage() {
  return (
    <div className={s.wrapper}>
      <section className={s.hero}>
          <h1 className={s.hero_title}>
            Questify
            </h1>
            
          <p className={s.hero_txt__top}>
            Questify will turn your life into
            a thrilling game full of amazing
            quests and exciting challenges.
          </p>

          <p className={s.hero_txt__bottom}>
            Choose your name to sign up or log in
          </p>

          <form className={s.auth_form}>
            <input type="text" name="user-email" className={s.auth_form_input} placeholder="Email" required />
            <input type="text" name="user-password" className={s.auth_form_input} placeholder="Password" required />       
            <button type="submit" className={s.auth_form_button}>
              go!
            </button>
          </form>
      </section>
    </div>
  );
}

export default AuthPage;

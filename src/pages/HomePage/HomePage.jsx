import Card from "../../components/Card";
import ButtonAddCard from "../../components/ButtonAddCard";

import s from './HomePage.module.css'

function HomePage() {
  return (
    <>
      <section className={s.hero}>
        <h1 className={s.hero_title}>
          Questify
        </h1>
        
        <Card />
        <ButtonAddCard />

      </section>
    </>
  );
}

export default HomePage
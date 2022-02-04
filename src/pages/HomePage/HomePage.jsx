import Container from "../../components/Container";
import Card from "../../components/Card";
import ButtonAddCard from "../../components/ButtonAddCard";

import s from './HomePage.module.css'

function HomePage() {
  return (
    <Container>
      <section className={s.hero}>
        <h1 className={s.hero_title}>
          Questify
        </h1>
        {/* <Header /> */}
        <Card />
        <ButtonAddCard />

      </section>
    </Container>
  );
}

export default HomePage
import Container from "../../components/Container";
import Header from "../../components/Header/Header";

import CardsToday from "../../components/CardsToday";
import CardsTomorrow from "../../components/CardsTomorrow";
import ButtonAddCard from "../../components/ButtonAddCard";
import ChallengeCart from "../../components/modal/ChallengeCart";

import s from "./HomePage.module.css";

function HomePage() {
  return (
    <section className={s.dashboard}>
      <Header />
      <Container>
        <CardsToday />
        <ChallengeCart />
        <CardsTomorrow />
        <ButtonAddCard />
      </Container>
    </section>
  );
}

export default HomePage;

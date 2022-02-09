import Container from "../../components/Container";
import Header from "../../components/Header/Header";

import CardsToday from "../../components/CardsToday";
import CardsTomorrow from "../../components/CardsTomorrow";
import ButtonAddCard from "../../components/ButtonAddCard";

import s from "./HomePage.module.css";
import { useSelector } from "react-redux";
import Card from "../../components/Card";
import DoneSection from "../../components/DoneSection/DoneSection";

function HomePage() {
  // const todo = useSelector((state) => state.todos);
  // console.log(todo);

  return (
    <section className={s.dashboard}>
      <Header />
      <Container>
        <CardsToday />
        {/* <CardsTomorrow /> */}
        <ButtonAddCard />
        <DoneSection />
      </Container>
    </section>
  );
}

export default HomePage;

import Container from "../../components/Container";
import Card from "../../components/Card";
import ButtonAddCard from "../../components/ButtonAddCard";

import s from './HomePage.module.css'

function HomePage() {
  return (
    <section className={s.dashboard}>
      <Container>
          {/* <Header /> */}
          <Card />
          <ButtonAddCard />
      </Container>
    </section>
  );
}

export default HomePage
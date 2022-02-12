import s from './HomePage.module.css';

import Container from '../../components/Container';
import Header from '../../components/Header/Header';
import CardsActive from '../../components/CardsActive/CardsActive';
import ButtonAddCard from '../../components/ButtonAddCard';
import DoneSection from '../../components/DoneSection/DoneSection';

function HomePage() {
  return (
    <section className={s.dashboard}>
      <Header />
      <Container>
        <CardsActive />
        <ButtonAddCard />
        <DoneSection />
      </Container>
    </section>
  );
}

export default HomePage;

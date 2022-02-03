import ButtonAddCard from "../ButtonAddCard/ButtonAddCard";
import Card from "./Card/Card";
import s from "./Container.module.css";
const Container = () => {
  return (
    <div className={s.container}>
      <Card />
      <ButtonAddCard />
    </div>
  );
};

export default Container;

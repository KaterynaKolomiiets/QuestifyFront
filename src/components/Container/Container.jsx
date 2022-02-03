import Card from "./Card/Card";
import s from "./Container.module.css";
const Container = () => {
  return (
    <div className={s.container}>
      <Card />
    </div>
  );
};

export default Container;

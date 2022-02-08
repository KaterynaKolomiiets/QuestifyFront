import s from "./CategoryModal.module.css";

const CategoryModal = ({ change }) => {
  function changeType(e) {
    console.log(e.target.textContent);
    change(e.target.textContent);
  }

  return (
    <ul onClick={changeType} className={s.list}>
      <li className={s.option}>
        <span>STUFF</span>
      </li>
      <li className={s.option}>
        <span>FAMILY</span>
      </li>
      <li className={s.option}>
        <span>HEALTH</span>
      </li>
      <li className={s.option}>
        <span>LEARNING</span>
      </li>
      <li className={s.option}>
        <span>LEISURE</span>
      </li>
      <li className={s.option}>
        <span>WORK</span>
      </li>
    </ul>
  );
};

export default CategoryModal;

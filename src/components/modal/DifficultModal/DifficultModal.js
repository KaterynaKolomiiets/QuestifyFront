import s from "./difficultModal.module.css";
import style from "../../../utils/variables.css";

const DifficultModal = ({ change }) => {
  function onchange(e) {
    if (e.currentTarget.textContent !== e.target.textContent) {
      change(e.target.textContent);
    }
  }

  return (
    <ul onClick={onchange} className={s.list}>
      <li className={s.fstOption}>
        <span>Easy</span>
      </li>
      <li className={s.secondOption}>
        <span>Normal</span>
      </li>
      <li className={s.thirdOption}>
        <span>Hard</span>
      </li>
    </ul>
  );
};

export default DifficultModal;

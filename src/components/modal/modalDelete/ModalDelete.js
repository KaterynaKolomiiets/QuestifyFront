import s from "./Delete.module.css";
import style from "../../../utils/variables.css";

const ModalDelete = () => {
  return (
    <div className={s.modal}>
      <p className={s.text}>Delete this Quest?</p>
      <button className={s.cancel} type="button">
        CANCEL
      </button>
      <button className={s.delete} type="button">
        DELETE
      </button>
    </div>
  );
};

export default ModalDelete;

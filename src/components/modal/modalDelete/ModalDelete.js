import s from "./Delete.module.css";
import style from "../../../utils/variables.css";

const ModalDelete = ({ change }) => {
  function deleteHandler(e) {
    console.log(e.target);
    change(true);
  }

  function cancel(e) {
    change(false);
  }

  return (
    <div className={s.modal}>
      <p className={s.text}>Delete this Quest?</p>
      <button className={s.cancel} type="button" onClick={cancel}>
        CANCEL
      </button>
      <button className={s.delete} type="button" onClick={deleteHandler}>
        DELETE
      </button>
    </div>
  );
};

export default ModalDelete;

import s from "./ModalWindow.module.css";
import closeBtn from "../../../images/closeBtn.png";

import { createPortal } from "react-dom";

const ModalWindow = ({ toggleModal, children }) => {
  const portalModal = document.querySelector("#nodalRoot");

  const clickBackdrop = (event) => {
    if (event.currentTarget === event.target) {
      toggleModal();
    }
  };

  return createPortal(
    <div className={s.backdrop} onClick={clickBackdrop}>
      <div className={s.exitModal}>
        <button type="button" className={s.closeBtn} onClick={toggleModal}>
          <img src={closeBtn} alt="closeButton" />
        </button>
        {children}
      </div>
    </div>,
    portalModal
  );
};

export default ModalWindow;

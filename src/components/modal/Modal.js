import { createPortal } from "react-dom";
import { useEffect } from "react";
import PropTypes from "prop-types";
import s from "./Modal.module.css";

export default function Modal({ children }) {
  // const portalModal = document.querySelector("#nodalRoot");

  //   useEffect(() => {
  //     window.addEventListener("keydown", handleKeydown);
  //     return function removeLisener() {
  //       window.removeEventListener("keydown", handleKeydown);
  //     };
  //   });

  //   function handleKeydown(e) {
  //     if (e.code === "Escape") close();
  //   }

  //   function closeModal(e) {
  //     if (e.currentTarget === e.target) {
  //       close();
  //     }
  //   }

  // return createPortal(
  //   <div className={s.Overlay}>
  //     <div className={s.Modal}>{children}</div>
  //   </div>,
  //   portalModal
  // );
  return (
    <div className={s.Overlay}>
      <div className={s.Modal}>{children}</div>
    </div>
  );
}

// Modal.propTypes = { children: PropTypes.element, close: PropTypes.func };

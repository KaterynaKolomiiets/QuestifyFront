import s from "./Modal.module.css";

export default function Modal({ children }) {
  return (
    <div className={s.Overlay}>
      <div className={s.Modal}>{children}</div>
    </div>
  );
}


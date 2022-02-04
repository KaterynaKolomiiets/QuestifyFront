import Icon from "../Icon";
import s from "./DoneSection.module.css";

const DoneSection = () => {
    return (
        <>
        <section className={s.sectionDone}>
            <div className={s.lineWrapper}>
              <button className={s.btnDone}>
                DONE
                <Icon className={s.IconDone} name={"arrow-up"} size={12} />
              </button>
            </div>
          </section>
        </>
    )
}

export default DoneSection;

import s from './CardBottomMenu.module.css';

import saveIcon from '../../../../images/save.svg';

const CardBottomMenu = ({
  isNewCard,
  edit,
  onDeleteNew,
  onAddNew,
  onCloseAndSave,
  onDelete,
  onChangeCompleted,
}) => {
  return (
    <>
      {isNewCard && (
        <>
          <div className={s.buttons}>
            <span className={s.cross} onClick={onDeleteNew}>
              &#10006;
            </span>
            <span onClick={onAddNew} className={s.start}>
              START
            </span>
          </div>
        </>
      )}
      {edit && !isNewCard && (
        <>
          <div className={s.buttons}>
            <div className={s.saveIcon} onClick={onCloseAndSave}>
              <img src={saveIcon} alt="save card" />
            </div>
            <span className={s.cross} onClick={onDelete}>
              &#10006;
            </span>
            <span onClick={onChangeCompleted} className={s.checked}>
              &#10004;
            </span>
          </div>
        </>
      )}
    </>
  );
};

export default CardBottomMenu;

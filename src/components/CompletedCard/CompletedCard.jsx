import { CSSTransition } from 'react-transition-group';
import Icons from '../../icons/sprite.svg';
import Icon from '../Icon';
import './CompletedStyle.css';
import s from './CompletedCard.module.css';

const CompletedCard = ({ change, title, onedit, card }) => {
  return (
    <>
      <li className={s.card}>
        <div className={s.questBox}>
          <div className={s.contentBox}>
            <p className={s.content}>COMPLETED:</p>
            <p className={s.link}>
              <span className={s.linkText}>{title}</span>
            </p>
          </div>
          <div className={s.awardBox}>
            <CSSTransition
              in={true}
              appear={true}
              timeout={1250}
              classNames="leftClouds"
              unmountOnExit
            >
              <svg className={s.leftClouds}>
                <use xlinkHref={`${Icons}#left-clouds`} />
              </svg>
            </CSSTransition>
            <CSSTransition
              in={true}
              appear={true}
              timeout={1250}
              classNames="rightClouds"
              unmountOnExit
            >
              <svg className={s.rightClouds}>
                <use xlinkHref={`${Icons}#right-clouds`} />
              </svg>
            </CSSTransition>
            <svg className={s.iconBase}>
              <use xlinkHref={`${Icons}#base`} />
            </svg>

            <div>
              <CSSTransition
                in={true}
                appear={true}
                timeout={1000}
                classNames="target"
                unmountOnExit
              >
                <svg className={s.iconTarget}>
                  <use xlinkHref={`${Icons}#target`} />
                </svg>
              </CSSTransition>
              <CSSTransition
                in={true}
                appear={true}
                timeout={2000}
                classNames="arrow"
                unmountOnExit
              >
                <svg className={s.iconArrow}>
                  <use xlinkHref={`${Icons}#arrow`} />
                </svg>
              </CSSTransition>
            </div>
          </div>
          <button className={s.button} onClick={change}>
            <span>Continue</span>
            <Icon className={s.arrow} name={'arrow-right'} />
          </button>
        </div>
      </li>
    </>
  );
};

export default CompletedCard;

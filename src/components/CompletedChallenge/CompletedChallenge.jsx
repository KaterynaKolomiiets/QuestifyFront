
import { CSSTransition } from 'react-transition-group';
import Icons from '../../icons/sprite.svg';
import Icon from '../Icon';
import s from './CompletedChallenge.module.css';

const CompletedChallenge = ({change, title, id}) => {

  
    return (
      <li className={s.card} key={id} >
        <div className={s.challengeBox}>
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
            <CSSTransition in={true} appear={true} timeout={1000} classNames="trophy" unmountOnExit>
              <svg className={s.iconTrophy}>
                <use xlinkHref={`${Icons}#trophy-cup`} />
              </svg>
            </CSSTransition>
            <CSSTransition in={true} appear={true} timeout={2000} classNames="first" unmountOnExit>
              <svg className={s.iconFirst}>
                <use xlinkHref={`${Icons}#first`} />
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
  );
};

export default CompletedChallenge;

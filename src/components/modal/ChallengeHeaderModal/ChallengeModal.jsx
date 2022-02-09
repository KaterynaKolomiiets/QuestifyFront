import s from './ChallengeModal.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { todosActive } from '../../../redux/todos/todosSelector';
import { showTodosActive } from '../../../redux/todos/operation';

import Card from '../../Card';

const ChallengeModal = ({ challengeModal }) => {
  const todos = useSelector(todosActive);
  const dispatch = useDispatch();
  console.log('todos', todos);

  const clickBackdrop = event => {
    if (event.currentTarget === event.target) {
      challengeModal();
    }
  };

  useEffect(() => {
    dispatch(showTodosActive());
  }, []);

  return (
    <div className={s.modal} onClick={clickBackdrop}>
      {/*       <div className={s.modalDiv}> */}
      {todos.some(item => item.type === 'CHALLENGE') ? (
        <ul>
          {todos
            .filter(item => item.type === 'CHALLENGE')
            .map(card => {
              return <Card key={card._id} card={card} />;
            })}
        </ul>
      ) : (
        <p className={s.missingChallenges}> Challenges are missing</p>
      )}
      {/* </div> */}
    </div>
  );
};

export default ChallengeModal;

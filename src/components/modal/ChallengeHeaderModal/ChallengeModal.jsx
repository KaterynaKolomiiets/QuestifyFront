import s from './ChallengeModal.module.css';

import { useSelector} from 'react-redux';
import { todosActive } from '../../../redux/todos/todosSelector';
import Card from '../../Card';

const ChallengeModal = ({ challengeModal }) => {
  const todos = useSelector(todosActive);

  const clickBackdrop = event => {
    if (event.currentTarget !== event.target) {
      challengeModal();
    }
  };

  return (
    <div className={s.backdrop}>
      {todos.some(item => item.type === 'CHALLENGE') ? (
        <div className={s.modal}>
          <ul>
            {todos
              .filter(item => item.type === 'CHALLENGE')
              .map(card => {
                return (
                  <Card key={card._id} card={card} isChallengeWindow={true} />
                );
              })}
          </ul>
        </div>
      ) : (
        <p className={s.missingChallenges}> No current challenges</p>
      )}
    </div>
  );
};

export default ChallengeModal;

import React, {useState} from 'react';
import {BoardTask} from '../../../domain/BoardTask';
import styles from './TaskCreator.scss';
import {Guid} from 'js-guid';

interface Props {
  onAddTask: (task: BoardTask) => void;
  sectionId: Guid;
}

export const TaskCreator: React.FC<Props> = ({onAddTask, sectionId}) => {
  const [name, setName] = useState('');
  const [isCreating, setIsCreating] = useState(false);

  const wrapperOnAddTask = () => {
    onAddTask({
      id: new Guid(),
      sectionId: sectionId,
      name: name,
      desc: '',
    });

    setIsCreating(false);
  };

  return (
    <div className={styles.root}>
      {isCreating ? (
        <div>
          <textarea
            placeholder={'Введите заголовок для этой карточки'}
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <div className={styles.bt_container}>
            <button onClick={wrapperOnAddTask}>Добавить карточку</button>
            <button>Х</button>
          </div>
        </div>
      ) : (
        <button className={styles.add_task_bt} onClick={() => setIsCreating(true)}>
          + Добавить карточку
        </button>
      )}
    </div>
  );
};

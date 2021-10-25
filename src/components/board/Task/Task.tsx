import React from 'react';
import {BoardTask} from '../../../domain/BoardTask';
import styles from './Task.scss';
import {TaskModal} from '../TaskModal/TaskModal';

interface Props {
  readonly task: BoardTask;
}

export const Task: React.FC<Props> = ({task}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.root}>
      <div className={styles.container} onClick={handleOpen}>
        <div className={styles.name}>{task.name}</div>
      </div>
      <TaskModal handleClose={handleClose} isOpen={open} name={task.name}/>
    </div>
  );
};

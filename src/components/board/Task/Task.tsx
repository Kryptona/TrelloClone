import React, {useState} from 'react';
import {BoardTask} from '../../../domain/BoardTask';
import styles from './Task.scss';
import {Modal} from '../TaskModal/Modal';

interface Props {
  readonly task: BoardTask;
  readonly onUpdate: (task: BoardTask) => void;
  readonly onRemoveTask: (task: BoardTask) => void;
}

export const Task: React.FC<Props> = ({task, onUpdate, onRemoveTask}) => {
  const [open, setOpen] = useState(false);

  const handleDesc = (newDesc: string) => {
    const newTask = {...task, desc: newDesc};
    console.log('newTask  ', newTask);
    onUpdate(newTask);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.root} onClick={handleOpen}>
      <div className={styles.name}>{task.name}</div>
      <button className={styles.remove_btn} onClick={() => onRemoveTask(task)}>
        X
      </button>
      {open && <Modal handleClose={handleClose} task={task} onHandleDesc={handleDesc} />}
    </div>
  );
};

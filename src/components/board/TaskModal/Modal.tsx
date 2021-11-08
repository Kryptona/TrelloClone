import React, {MouseEvent, MouseEventHandler, useState} from 'react';
import styles from './Modal.scss';
import {BoardTask} from "../../../domain/BoardTask";

interface Props {
  readonly handleClose: () => void;
  readonly task: BoardTask;
  readonly onHandleDesc: (newDec: string) => void;
}

export const Modal: React.FC<Props> = ({handleClose, task, onHandleDesc}) => {
  const onContainerClick: MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const [desc, setDesc] = useState(task.desc);

  const onSaveDesc = () => {
    onHandleDesc(desc);
    handleClose();
  };

  const onCancelDesc = () => {
    handleClose();
  };

  return (
    <div className={styles.root} onClick={handleClose}>
      <div className={styles.modal_container} onClick={onContainerClick}>
        <div className={styles.header}>
          <div className={styles.cardName}>{task.name}</div>
          <div className={styles.column}>
            в колонку <span>{task.sectionName}</span>
          </div>
        </div>
        <div className={styles.desc}>
          <div className={styles.title}>Описание</div>
          <textarea
            placeholder={'Добавить более подробное описание...'}
            onChange={(event) => setDesc(event.target.value)}
            value={desc}
          />
        </div>
        <div className={styles.desc_bts}>
          <button onClick={onSaveDesc}>Сохранить</button>
          <button onClick={onCancelDesc}>Отменить</button>
        </div>
      </div>
    </div>
  );
};

import React, {MouseEvent, MouseEventHandler, useState} from 'react';
import styles from './Modal.scss';

interface Props {
  handleClose: () => void;
  cardName: string;
  sectionName: string;
  handleDesc: (newDec: string) => void;
  descFromTask: string;
}

export const Modal: React.FC<Props> = ({handleClose, cardName, sectionName, handleDesc, descFromTask}) => {
  const onContainerClick: MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const [desc, setDesc] = useState('');

  const onSaveDesc = () => {
    handleDesc(desc);
    handleClose();
  };

  const onCancelDesc = () => {
    setDesc(descFromTask);
    handleClose();
  };

  return (
    <div className={styles.root} onClick={handleClose}>
      <div className={styles.modal_container} onClick={onContainerClick}>
        <div className={styles.header}>
          <div className={styles.cardName}>{cardName}</div>
          <div className={styles.column}>
            в колонку <span>{sectionName}</span>
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

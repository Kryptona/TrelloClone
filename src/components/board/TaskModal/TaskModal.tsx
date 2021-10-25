import React from 'react';
import styles from './TaskModal.scss';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {SxProps} from '@mui/system';

interface Props {
  handleClose: () => void;
  isOpen: boolean;
  name: string;
}

const style: SxProps = {
  position: 'absolute',
  top: '5%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 2,
  p: 2,
  px: 4,
  pb: 3,
  outline: 0,
};

export const TaskModal: React.FC<Props> = ({handleClose, isOpen, name}) => {
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description">
      <Box sx={style}>
        <div className={styles.modal_container}>{name}</div>
        <div>
          <div>
              Описание
          </div>
            <textarea placeholder="Введите описание"/>
        </div>
      </Box>
    </Modal>
  );
};

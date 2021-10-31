import React, {MouseEvent, MouseEventHandler} from 'react';
import styles from "./Modal.scss";

interface Props{
    handleClose: () => void;
}

export const Modal: React.FC<Props> = ({handleClose}) => {

    const onContainerClick: MouseEventHandler<HTMLDivElement> = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }

    return (
        <div className={styles.root} onClick={handleClose}>
            <div className={styles.modal_container} onClick={onContainerClick}>

            </div>
        </div>
    );
};

import React from 'react';
import styles from "./createBoard.scss";

const CreateBoard = () => {
    return (
        <div className={styles.root}>
            <div className={styles.title}>Создание доски</div>
            <span> </span>
            <div className={styles.body}>
                <input/>
            </div>
            <div className={styles.button_container}>
                <button>CANSEL</button>
                <button>CREATE</button>
            </div>
        </div>
    );
};

export default CreateBoard;
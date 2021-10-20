import React, {useState} from 'react';
import styles from "./BoardCard.scss";
import {Board} from "../../../domain/Board";
import close from "../../../img/CloseIcon.svg";

interface Props {
    readonly board: Board
}

const BoardCard: React.FC<Props> = ({board}) => {

    const onDeleteBoard = () => {

    }

    return (
        <div className={styles.root}>
            {board.title}
            <button onClick={onDeleteBoard}><img src={close}/></button>

        </div>
    );
};

export default BoardCard;

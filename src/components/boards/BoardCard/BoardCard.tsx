import React, {useState} from 'react';
import styles from "./BoardCard.scss";
import {Board} from "../../../domain/Board";

interface Props {
    readonly board: Board
}

const BoardCard: React.FC<Props> = ({board}) => {
    return (
        <div className={styles.root}>
            {board.title}
        </div>
    );
};

export default BoardCard;

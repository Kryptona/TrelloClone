import React, {MouseEventHandler} from 'react';
import styles from "./BoardCard.scss";
import {Board} from "../../../domain/Board";
import close from "../../../img/CloseIcon.svg";
import {Link} from "react-router-dom";
import {boardsApi} from "../../../api/boardsApi";

interface Props {
    readonly board: Board,
    readonly onDelete: (index: Guid) => void;
}

const BoardCard: React.FC<Props> = ({board, onDelete}) => {
    const onDeleteWrapper: MouseEventHandler = e => {
        e.stopPropagation();
        e.preventDefault();
        onDelete(board.id);
        boardsApi.removeBoard(board.id);
    };

    console.log("In BoardCard id is     "  + board.id);

    return (
        <Link to={`/board/${board.id}`}>
            <div className={styles.root}>
                {board.title}
                <button onClick={onDeleteWrapper}>
                    <img src={close}/>
                </button>
            </div>
        </Link>
    );
};

export default BoardCard;

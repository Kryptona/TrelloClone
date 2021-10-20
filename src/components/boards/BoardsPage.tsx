import React, {useState} from 'react';
import styles from "./board_default.scss";
import Lamp from "../shared/lamp/Lamp";
import {BoardCreator} from "./BoardCreator/BoardCreator";
import {Board} from "../../domain/Board";
import BoardCard from "./BoardCard/BoardCard";

const BoardsPage = () => {

    const [isBoardCreating, setIsBoardCreating] = useState(false);
    const [boards, setBoards] = useState<ReadonlyArray<Board>>([]);

    const viewBoardCreator = () => {
        console.log("Click!");
        setIsBoardCreating(true);
    }

    const onCreateBoard = (board: Board) => {
        setIsBoardCreating(false);
        setBoards([...boards, board]);
    }

    const onCancel = () => {
        setIsBoardCreating(false);
    }

    const onDeleteBoard = (id: number) => {
        const newBoards = [...boards];
        setBoards(newBoards.splice(id, 1))
    }

    return (
        <div className={styles.root}>
            <Lamp/>
            <div className={styles.boards}>
                {isBoardCreating
                    ?
                    <BoardCreator onResult={onCreateBoard} onCancel={onCancel}/>
                    :
                    <div className={styles.board_container} onClick={viewBoardCreator}>
                        <span>Добавить доску</span>
                    </div>
                }
                {boards.map((board, index) => (<BoardCard key={index} board={board}/>))}
            </div>
        </div>
    );
};

export default BoardsPage;

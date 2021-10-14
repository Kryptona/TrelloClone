import React, {useState} from 'react';
import styles from "./board_default.scss";
import Lamp from "../shared/lamp/Lamp";
import CreateBoard from "./createBoard/CreateBoard";

const Board = () => {

    const [newBoard, setNewBoard] = useState(true);

    const createBoard = () => {
        console.log("Click!");
        setNewBoard(true);
    }

    return (
        <div className={styles.root}>
            <Lamp/>
            {newBoard
                ?
                <CreateBoard/>
                :
                <div className={styles.board_container} onClick={createBoard}>
                    <span>Добавить доску</span>
                </div>
            }
        </div>
    );
};

export default Board;
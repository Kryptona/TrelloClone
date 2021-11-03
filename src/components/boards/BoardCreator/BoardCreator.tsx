import React, {useState} from 'react';
import styles from "./BoardCreator.scss";
import {Board} from "../../../domain/Board";
import {guid} from "../../../utils/guidUtils";

interface Props {
    readonly onResult: (value: Board) => void;
    readonly onCancel: () => void;
}

export const BoardCreator: React.FC<Props> = ({onResult, onCancel}) => {
    const [inputValue, setInputValue] = useState<string>("")

    const createBoard = () => {
        const board: Board = {
            id: guid(),
            title: inputValue,
            dateTime: new Date(),
            sections: [],
        };
        onResult(board);
    }

    return (
        <div className={styles.root}>
            <div className={styles.title}>Создание доски</div>
            <div className={styles.body}>
                <input
                    type="text"
                    placeholder="Название..."
                    value={inputValue}
                    onChange={event => setInputValue(event.target.value)}
                />
            </div>
            <div className={styles.button_container}>
                <button onClick={onCancel}>CANCEL</button>
                <button onClick={createBoard}>CREATE</button>
            </div>
        </div>
    );
};

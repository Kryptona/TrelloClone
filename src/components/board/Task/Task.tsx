import React from 'react';
import {BoardTask} from "../../../domain/BoardTask";
import styles from "./Task.scss";

interface Props {
    readonly task: BoardTask;
}

export const Task: React.FC<Props> = ({task}) => {
    return (
        <div className={styles.root}>
            <div className={styles.name}>{task.name}</div>
        </div>
    );
};

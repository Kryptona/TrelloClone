import React, {useState} from 'react';
import styles from "./Section.scss";
import {BoardSection} from "../../../domain/BoardSection";
import {Task} from "../Task/Task";
import {SectionCreator} from "../SectionCreator/SectionCreator";
import {Guid} from "js-guid";
import {BoardTask} from "../../../domain/BoardTask";

interface Props {
    onAddSection: (section: BoardSection) => void;
    boardId: Guid;
    section: BoardSection;
}

export const Section: React.FC<Props> = ({section, onAddSection, boardId}) => {
    const [title, setTitle] = useState(""); //чтобы ы будущем динамически исправлять название

    return (
        <div className={styles.root}>
            <div>
                <div className={styles.title}>
                    {title}
                </div>
                {/*{section.tasks.map((task, index) => <Task key={index} task={task}/>)}*/}
                <button>+ Добавить карточку</button>
            </div>
        </div>
    );
};

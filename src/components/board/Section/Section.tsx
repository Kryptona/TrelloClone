import React, {useState} from 'react';
import styles from "./Section.scss";
import {BoardSection} from "../../../domain/BoardSection";
import {TaskCreator} from "../TaskCreator/TaskCreator";
import {SectionCreator} from "../SectionCreator/SectionCreator";
import {Guid} from "js-guid";
import {BoardTask} from "../../../domain/BoardTask";
import {Task} from "../Task/Task";

interface Props {
    onAddSection: (section: BoardSection) => void;
    boardId: Guid;
    section: BoardSection;
}

export const Section: React.FC<Props> = ({section, onAddSection, boardId}) => {
    const [title, setTitle] = useState(section.name);
    const [tasks, setTasks] = useState(section.tasks);

    const [isCreateTask, setIsCreateTask] = useState(false);

    const onAddTask = (task: BoardTask) => {
        console.log(task);
        setTasks([...tasks, task]);
    }

    return (
        <div className={styles.root}>
            <div>
                <div className={styles.title}>
                    {title}
                </div>
                {tasks.map((task, index) => <Task key={index} task={task}/>)}
                <TaskCreator onAddTask={onAddTask} sectionId={section.id} sectionName={title}/>
            </div>
        </div>
    );
};

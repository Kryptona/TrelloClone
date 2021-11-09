import React, {useState} from 'react';
import styles from './Section.scss';
import {BoardSection} from '../../../domain/BoardSection';
import {TaskCreator} from '../TaskCreator/TaskCreator';
import {BoardTask} from '../../../domain/BoardTask';
import {Task} from '../Task/Task';
import {boardsApi} from "../../../api/boardsApi";

interface Props {
  onAddSection: (section: BoardSection) => void;
  boardId: Guid;
  section: BoardSection;
  onRemoveSection: (id: Guid) => void;
}

export const Section: React.FC<Props> = ({section, onAddSection, boardId, onRemoveSection}) => {
  const [title, setTitle] = useState(section.name);
  const [tasks, setTasks] = useState(section.tasks);

  const onAddTask = (task: BoardTask) => {
    const newTasks = [...tasks, task];
    setTasks(newTasks);
    onAddSection({
      id: section.id,
      name: section.name,
      boardId: section.boardId,
      tasks: newTasks,
    });
  };

  //todo подключить редакс и переписать это гавно
  // переписать все useState в редакс
  const onUpdateTask = (task: BoardTask) => {
    const newTasks = [...tasks];
    const index = newTasks.findIndex(t => t.id == task.id);
    newTasks[index] = task;
    setTasks(newTasks);
    boardsApi.postTask(task);
  };

  return (
    <div className={styles.root}>
      <div>
        <button onClick={() => onRemoveSection(section.id)}>X</button>
        <div className={styles.title}>{title}</div>
        {tasks.map((task, index) => (
          <Task key={index} task={task} onUpdate={onUpdateTask} />
        ))}
        <TaskCreator onAddTask={onAddTask} sectionId={section.id} sectionName={title} />
      </div>
    </div>
  );
};

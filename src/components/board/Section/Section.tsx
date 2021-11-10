import React, {useState} from 'react';
import styles from './Section.scss';
import {BoardSection} from '../../../domain/BoardSection';
import {TaskCreator} from '../TaskCreator/TaskCreator';
import {BoardTask} from '../../../domain/BoardTask';
import {Task} from '../Task/Task';

interface Props {
  onAddSection: (section: BoardSection) => void;
  section: BoardSection;
  onRemoveSection: (id: Guid) => void;
}

export const Section: React.FC<Props> = ({section, onAddSection, onRemoveSection}) => {
  const [title, setTitle] = useState(section.name);
  const [tasks, setTasks] = useState(section.tasks);

  // console.log(tasks);
  console.log(section);

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
  const onRemoveTask = (task: BoardTask) => {
    const newTasks = tasks.filter(t => t.id !== task.id);
    setTasks([...newTasks]);
    onAddSection({...section, tasks: newTasks});
  }


  //todo подключить редакс и переписать это гавно
  // переписать все useState в редакс
  const onUpdateTask = (task: BoardTask) => {
    const newTasks = [...tasks];
    const index = newTasks.findIndex(t => t.id == task.id);
    newTasks[index] = task;
    setTasks(newTasks);
    onAddSection({...section, tasks: newTasks});
  };

  return (
    <div className={styles.root}>
      <div>
        <button onClick={() => onRemoveSection(section.id)}>X</button>
        <div className={styles.title}>{title}</div>
        {tasks.map((task, index) => (
          <Task key={index} task={task} onUpdate={onUpdateTask} onRemoveTask={onRemoveTask} />
        ))}
        <TaskCreator onAddTask={onAddTask} sectionId={section.id} sectionName={title} />
      </div>
    </div>
  );
};

import {Board} from '../domain/Board';
import {BoardSection} from '../domain/BoardSection';
import {BoardTask} from '../domain/BoardTask';

function getBoards(): Promise<Board[]> {
  const jsonBoards = localStorage.getItem('boards');
  const boards = JSON.parse(jsonBoards) as Board[];
  return Promise.resolve(boards || []);
}
function postBoards(boards: Board[]): Promise<void> {
  localStorage.setItem('boards', JSON.stringify(boards));
  return Promise.resolve();
}
function getSections(boardId: Guid): Promise<BoardSection[]> {
  const jsonSections = localStorage.getItem('sections');
  const sections = (JSON.parse(jsonSections) as BoardSection[]) || [];
  return Promise.resolve(sections.filter((section) => section.boardId == boardId));
}
function postSections(newSection: BoardSection): Promise<void> {
  const jsonSections = localStorage.getItem('sections');
  const sections = (JSON.parse(jsonSections) as BoardSection[]) || [];
  const oldSections = sections.filter((section) => section.id !== newSection.id);
  localStorage.setItem('sections', JSON.stringify([...oldSections, newSection]));
  return Promise.resolve();
}

function postTask(task: BoardTask): Promise<void> {
  const jsonSections = localStorage.getItem('sections');
  const sections = (JSON.parse(jsonSections) as BoardSection[]) || [];
  const tasks = sections.find((s) => s.id === task.sectionId).tasks;
  const sectionIndex = sections.findIndex((section) => section.id == task.sectionId);
  const newSections = [...sections];
  let newTasks = [...tasks];
  const taskIndex = newTasks.findIndex((t) => t.id == task.id);
  newTasks[taskIndex] = task;
  console.log(newSections);
  newSections[sectionIndex].tasks = newTasks;
  localStorage.removeItem('sections');
  localStorage.setItem('sections', JSON.stringify(newSections));
  return Promise.resolve();
}


export const boardsApi = {
  getBoards,
  postBoards,
  getSections,
  postSections,
  postTask,
} as const;
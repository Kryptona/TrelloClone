import {Board} from '../domain/Board';
import {sectionsApi} from './sectionsApi';

function getBoards(): Promise<Board[]> {
  const jsonBoards = localStorage.getItem('boards');
  const boards = JSON.parse(jsonBoards) as Board[];
  return Promise.resolve(boards || []);
}
function postBoards(boards: Board[]): Promise<void> {
  localStorage.setItem('boards', JSON.stringify(boards));
  return Promise.resolve();
}

function removeBoard(boardId: Guid): Promise<void> {
  getBoards().then((boards) => {
        const newBoards = boards.filter((b) => b.id !== boardId);
        localStorage.removeItem('boards');
        localStorage.setItem('boards', JSON.stringify(newBoards));
        removeSectionsHelper(boardId);
  })
  return Promise.resolve();
}

function removeSectionsHelper(boardId: Guid): Promise<void> {
  sectionsApi.getSections(boardId).then((sections) => {
    const newSections = sections.filter((s) => s.boardId !== boardId);
    localStorage.removeItem('sections');
    localStorage.setItem('sections', JSON.stringify(newSections));
  })
  return Promise.resolve();
}

export const boardsApi = {
  getBoards,
  postBoards,
  removeBoard,
} as const;

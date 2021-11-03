import {Board} from '../domain/Board';

function getBoards(): Promise<Board[]> {
  const jsonBoards = localStorage.getItem('boards');
  const boards = JSON.parse(jsonBoards) as Board[];
  return Promise.resolve(boards);
}
function postBoards(boards: Board[]): Promise<void> {
  localStorage.setItem('boards', JSON.stringify(boards));
  return Promise.resolve();
}

export const boardsApi = {
  getBoards,
  postBoards,
} as const;

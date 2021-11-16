import {BoardState, defaultBoardState} from "./board/BoardState";
import {BoardsState, defaultBoardsState} from "./boards/BoardsState";

export interface RootState {
    board: BoardState;
    boards: BoardsState;
}

export const defaultRootState: Readonly<RootState> = {
    board: defaultBoardState,
    boards: defaultBoardsState,
};

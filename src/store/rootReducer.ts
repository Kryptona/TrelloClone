import {combineReducers} from "redux";
import {RootState} from "./RootState";
import {boardReducer} from "./board/reducer";
import {boardsReducer} from "./boards/reducer";

export function createRootReducer() {
    return combineReducers<RootState>({
        board: boardReducer,
        boards: boardsReducer,
    });
}

import {createStore, Store} from "redux";
import {defaultRootState, RootState} from "./RootState";
import {createRootReducer} from "./rootReducer";

export function createTrelloStore():Store<RootState> {
    return createStore(createRootReducer(), defaultRootState);
}

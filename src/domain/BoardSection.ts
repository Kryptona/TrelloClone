import {BoardTask} from "./BoardTask";

export interface BoardSection {
    id: Guid;
    boardId: Guid;
    name: string;
    tasks: BoardTask[];
}

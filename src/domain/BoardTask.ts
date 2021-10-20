import {Guid} from "js-guid";

export interface BoardTask {
    id: Guid;
    sectionId: Guid;
    name: string;
    desc: string;
}

import {BoardSection} from "./BoardSection";

export interface Board {
    id: Guid;
    title: string;
    dateTime: Date;
    sections: BoardSection[];
}

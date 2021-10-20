import {Guid} from "js-guid";

export interface Board {
    id: Guid;
    title: string;
    dateTime: Date;
}

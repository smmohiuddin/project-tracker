import {Epic} from "./epic";
export class Story {
    storyID : number;
    epic: Epic;
    shortName: string;
    description: string;
    startDate: Date;
    actualStartDate: Date;
    endDate: Date;
    actualEndDate: Date;
    status: number;
}

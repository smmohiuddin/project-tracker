import {Story} from "./story";
export class Task {
    taskID : number;
    story: Story;
    shortName: string;
    description: string;
    startDate: Date;
    actualStartDate: Date;
    endDate: Date;
    actualEndDate: Date;
    status: number;
}

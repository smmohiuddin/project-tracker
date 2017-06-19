import {Story, Resource} from "./index";
export class Task {
    taskID : number;
    story: Story;
    resource:Resource;
    shortName: string;
    description: string;
    startDate: Date;
    actualStartDate: Date;
    endDate: Date;
    actualEndDate: Date;
    status: number;
}

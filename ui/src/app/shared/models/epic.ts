import {Project} from "./project";

export class Epic {
    epicID : number;
    project: Project;
    shortName: string;
    description: string;
    startDate: Date;
    actualStartDate: Date;
    endDate: Date;
    actualEndDate: Date;
    Status: number;
}

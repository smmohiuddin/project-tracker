import {Injectable} from '@angular/core';

import {Project} from '../models/project';

@Injectable()
export class ProjectService {

    projects: Project[] = [
        {
            projectID: 1,
            projectName: "FAMS (ERD)",
            projectDesc: "A project from finance ministry of Bangladesh",
            startDate: new Date(),
            actualStartDate: new Date(),
            endDate: new Date(),
            actualEndDate: new Date()
        },
        {
            projectID: 2,
            projectName: "eMobile Court",
            projectDesc: "A project form A2I",
            startDate: new Date(),
            actualStartDate: new Date(),
            endDate: new Date(),
            actualEndDate: new Date()
        },
    ];


    constructor() {
    }

    getProjects(): Project[] {
        return this.projects;
    }
}

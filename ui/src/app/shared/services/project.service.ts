import {Injectable} from '@angular/core';

import { Http, Response, Headers } from '@angular/http';

import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

import {Project} from '../models/project';


@Injectable()
export class ProjectService {

    // private projectUrl = 'http://localhost:8080/projects';
    private projects: Project[] = [
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

    constructor() {}

    /*private getHeaders(){
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }*/

    /*getProjects(): Observable<Project[]> {
        return this.http.get(this.projectUrl, {headers: this.getHeaders()}).map(this.mapData);
    }*/

    getProjects(): Project[] {
        return this.projects;
    }

    /*private mapData(response: Response) : Project[] {
        return response.json().results.map(this.toProject)
    }

    private toProject(r: any) : Project {
        let project =  <Project>({
            projectID: r.projectID,
            projectDesc: r.projectDesc,
            projectName: r.projectName,
            startDate: new Date(r.startDate),
            actualStartDate: new Date(r.actualStartDate),
            endDate: new Date(r.endDate),
            actualEndDate: new Date(r.actualEndDate),
        });
        console.log('Parsed project:', project);
        return project;
    }*/
}

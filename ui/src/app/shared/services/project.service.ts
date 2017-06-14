import {Injectable} from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';

import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Project} from '../models/project';
import {BaseService} from "./base.service";


@Injectable()
export class ProjectService extends BaseService{

    constructor(private http: Http) {
        super();
    }

    getProjects(): Observable<Project[]> {
        return this.http.get(this.domainUrl + "/projects")
            .map(this.mapData).
            catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    createProject(body : Project): Observable<Project[]> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.domainUrl + "/projects", JSON.stringify(body), options).map(this.mapData);
    }

    updateProjects(body : Project): Observable<Project[]> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.put(this.domainUrl + "/projects" + "/" + body.projectID, JSON.stringify(body), options).map(this.mapData);
    }

    private mapData(response: Response) : Project[] {
        return response.json();
    }

    processDates(project, dateUtilService): void {
        project.startDate = dateUtilService.transformServerDate(project.startDate);
        project.endDate = dateUtilService.transformServerDate(project.endDate);
        project.actualStartDate = dateUtilService.transformServerDate(project.actualStartDate);
        project.actualEndDate = dateUtilService.transformServerDate(project.actualEndDate);
    }
}

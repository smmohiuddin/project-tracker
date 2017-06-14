import {Injectable} from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';

import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Project} from '../models/project';


@Injectable()
export class ProjectService {

    private projectUrl = 'http://localhost:8080/projects';

    constructor(private http: Http) {}

    getProjects(): Observable<Project[]> {
        return this.http.get(this.projectUrl).map(this.mapData).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    createProject(body : Project): Observable<Project[]> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.projectUrl, JSON.stringify(body), options).map(this.mapData);
    }

    updateProjects(body : Project): Observable<Project[]> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.put(this.projectUrl + "/" + body.projectID, JSON.stringify(body), options).map(this.mapData);
    }

    private mapData(response: Response) : Project[] {
        return response.json();
    }
}

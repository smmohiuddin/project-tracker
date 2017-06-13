import {Injectable} from '@angular/core';

import { Http, Response, Headers } from '@angular/http';

import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

import {Project} from '../models/project';


@Injectable()
export class ProjectService {

    private projectUrl = 'http://localhost:8080/projects';

    constructor(private http: Http) {}

    getProjects(): Observable<Project[]> {
        return this.http.get(this.projectUrl).map(this.mapData);
    }

    private mapData(response: Response) : Project[] {
        return response.json();
    }
}

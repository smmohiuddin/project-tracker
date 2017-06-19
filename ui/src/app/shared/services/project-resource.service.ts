import {Injectable} from '@angular/core';
import {BaseService} from "./base.service";
import {Observable} from "rxjs";
import {ProjectResource} from "../models/index";
import {Http, Response} from "@angular/http";

@Injectable()
export class ProjectResourceService extends BaseService{

    constructor(private http: Http) {
        super();
    }

    assignProjectResource(): Observable<ProjectResource[]> {
        return this.http.get(this.domainUrl + "/project-resources").map(this.mapData).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    private mapData(response: Response) : ProjectResource[] {
        return response.json();
    }
}

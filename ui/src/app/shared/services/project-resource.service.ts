import {Injectable} from '@angular/core';
import {BaseService} from "./base.service";
import {Observable} from "rxjs";
import {ProjectResource} from "../models/index";
import {Http, Response, RequestOptions, Headers} from "@angular/http";

@Injectable()
export class ProjectResourceService extends BaseService{

    constructor(private http: Http) {
        super();
    }

    assignProjectResource(body: ProjectResource): Observable<ProjectResource[]> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.domainUrl + "/project-resources", JSON.stringify(body), options).map(this.mapData);
    }

    private mapData(response: Response) : ProjectResource[] {
        return response.json();
    }
}

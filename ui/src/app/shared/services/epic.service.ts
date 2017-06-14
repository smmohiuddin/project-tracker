import {Injectable} from '@angular/core';
import {Epic} from "../models/index";
import {Observable} from "rxjs";
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {BaseService} from "./base.service";

@Injectable()
export class EpicService extends BaseService{

    constructor(private http: Http) {
        super();
    }

    createEpic(body: Epic, projectID: number): Observable<Epic[]> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        return this.http.post(this.domainUrl + "/projects/" + projectID + "/epics", JSON.stringify(body), options).map(this.mapData);
    }

    private mapData(response: Response) : Epic[] {
        return response.json();
    }

    processDates(epic, dateUtilService): void {
        epic.startDate = dateUtilService.transformServerDate(epic.startDate);
        epic.endDate = dateUtilService.transformServerDate(epic.endDate);
        epic.actualStartDate = dateUtilService.transformServerDate(epic.actualStartDate);
        epic.actualEndDate = dateUtilService.transformServerDate(epic.actualEndDate);
    }
}

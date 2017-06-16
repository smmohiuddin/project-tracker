import {Injectable} from '@angular/core';
import {Task} from "../models/index";
import {Observable} from "rxjs";
import {RequestOptions, Http, Headers, Response} from "@angular/http";
import {BaseService} from "./base.service";

@Injectable()
export class TaskService extends BaseService{

    constructor(private http: Http) {
        super();
    }

    getAllStories(storyID: number): Observable<Task[]> {
        return this.http.get(this.domainUrl + "/stories/" + storyID + "/tasks").map(this.mapData).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    createTask(body: Task, storyID): Observable<Task[]> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        return this.http.post(this.domainUrl + "/stories/" + storyID+ "/tasks", JSON.stringify(body), options).map(this.mapData);
    }

    updateTask(body: Task, storyID: number): Observable<Task[]> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        return this.http.put(this.domainUrl + "/stories/" + storyID + "/tasks/" + body.taskID, JSON.stringify(body), options).map(this.mapData);
    }

    processDates(task, dateUtilService): void {
        task.startDate = dateUtilService.transformServerDate(task.startDate);
        task.endDate = dateUtilService.transformServerDate(task.endDate);
        task.actualStartDate = dateUtilService.transformServerDate(task.actualStartDate);
        task.actualEndDate = dateUtilService.transformServerDate(task.actualEndDate);
    }

    private mapData(response: Response): Task[] {
        return response.json();
    }
}

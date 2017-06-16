import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers, Response} from "@angular/http";
import {BaseService} from "./base.service";
import {Story} from "../models/story";
import {Observable} from "rxjs";

@Injectable()
export class StoryService extends BaseService {

    constructor(private http: Http) {
        super()
    }

    getAllStories(epicID: number): Observable<Story[]> {
        return this.http.get(this.domainUrl + "/epics/" + epicID + "/stories").map(this.mapData).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    createStory(body: Story, epicID): Observable<Story[]> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        return this.http.post(this.domainUrl + "/epics/" + epicID + "/stories", JSON.stringify(body), options).map(this.mapData);
    }

    updateStory(body: Story, epicID: number): Observable<Story[]> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        return this.http.put(this.domainUrl + "/epics/" + epicID + "/stories/" + body.storyID, JSON.stringify(body), options).map(this.mapData);
    }

    private mapData(response: Response): Story[] {
        return response.json();
    }

    processDates(story, dateUtilService): void {
        story.startDate = dateUtilService.transformServerDate(story.startDate);
        story.endDate = dateUtilService.transformServerDate(story.endDate);
        story.actualStartDate = dateUtilService.transformServerDate(story.actualStartDate);
        story.actualEndDate = dateUtilService.transformServerDate(story.actualEndDate);
    }
}

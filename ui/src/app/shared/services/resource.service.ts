import {Injectable} from '@angular/core';
import {BaseService} from "./base.service";
import {Resource} from "../models/index";
import {Observable} from "rxjs/Observable";
import {Http, RequestOptions, Headers, Response} from "@angular/http";

@Injectable()
export class ResourceService extends BaseService {

    constructor(private http: Http) {
        super()
    }

    getResources(): Observable<Resource[]> {
        return this.http.get(this.domainUrl + "/resources") .map(this.mapData).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    createResource(body: Resource): Observable<Resource[]> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        return this.http.post(this.domainUrl + "/resources", JSON.stringify(body), options).map(this.mapData);
    }

    updateResource(body: Resource): Observable<Resource[]> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        return this.http.put(this.domainUrl + "/resources" + "/" + body.resourceID, JSON.stringify(body), options).map(this.mapData);
    }

    private mapData(response: Response): Resource[] {
        return response.json();
    }
}

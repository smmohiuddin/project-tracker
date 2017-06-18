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

    createResource(body: Resource): Observable<Resource[]> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        return this.http.post(this.domainUrl + "/resources", JSON.stringify(body), options).map(this.mapData);
    }

    private mapData(response: Response) : Resource[] {
        return response.json();
    }
}

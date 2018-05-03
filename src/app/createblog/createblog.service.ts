import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable()
export class createblogService {

    constructor(private http: Http) { }

    // CREATE BLOG
    createblog(data): Observable<any> {
        let body = JSON.stringify(data);
        console.log(body);
        let header = new Headers({
            'Content-Type': 'application/json'
        });
        header.append("Accept", 'application/json');
        let options = new RequestOptions({ headers: header });

        return this.http.post(`https://blooming-ravine-83123.herokuapp.com/blog/create`, body, options)
            .map(this.handleResponse).catch(this.handleError);
    }


    handleResponse(response: Response) {

        // alert(response)
        let body = response.json();
        // console.log(body)
        return body;
    }

    handleError(err: any) {
        return Observable.throw("Error");
    }
  
}
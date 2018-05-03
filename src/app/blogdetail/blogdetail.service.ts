import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable()
export class BlogDetailService {

    constructor(private http: Http) { }
    // GET BLOG DETAILS

    getBlogDetailbyid(blogId): Observable<any> {

        return this.http.get(`https://blooming-ravine-83123.herokuapp.com/blogs/${blogId}`)
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
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable()
export class BlogService {

    constructor(private http: Http) { }
    // GET BLOG DETAILS

    getBlogDetail(data): Observable<any> {

        return this.http.get(`https://blooming-ravine-83123.herokuapp.com/blogs`)
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

    // DELETE BLOG
    deleteblog(blogId): Observable<any> {
        let body = {};
        console.log(body);
        let header = new Headers({
            'Content-Type': 'application/json'
        });
        header.append("Accept", 'application/json');
        let options = new RequestOptions({ headers: header });

        return this.http.post(`https://blooming-ravine-83123.herokuapp.com/blogs/${blogId}/delete`, body, options)
            .map(this.handleResponse).catch(this.handleError);
    }

      // EDIT BLOG
    
}
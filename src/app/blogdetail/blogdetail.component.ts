import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogDetailService } from '../blogdetail/blogdetail.service';
@Component({
  selector: 'app-blogdetail',
  templateUrl: './blogdetail.component.html',
  styleUrls: ['./blogdetail.component.css'],
  providers: [BlogDetailService]
})
export class BlogdetailComponent implements OnInit {

  blogId:any = [];
  blogBO:any = [];
  constructor(private _blogserviceid: BlogDetailService, private router: Router, private route: ActivatedRoute) {
    this.route.params
      .map(params => params['id'])
      .subscribe(
      response => {
        this.blogId =response;
      }
      );
    
  }

  ngOnInit() {
    this._blogserviceid.getBlogDetailbyid(this.blogId)
      .subscribe(
      response => {
        this.blogBO = response;
        console.log("GET BLOG", response);
         console.log("Blogbody:", this.blogBO.blogBody)
      }

      )

  }
  Backtolist() {
    this.router.navigate(['/Blog']);
  }
}

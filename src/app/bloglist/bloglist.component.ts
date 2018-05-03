import { Component, OnInit } from '@angular/core';
import { BlogService } from '../bloglist/bloglist.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogdetailComponent } from '../blogdetail/blogdetail.component'
import { FormsModule, FormGroup, FormBuilder, Validators, FormControl, ReactiveFormsModule } from '@angular/forms'
@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css'],
  providers: [BlogService]
})
export class BloglistComponent implements OnInit {
  blog : any
  blogBO: any = [];
  constructor(private _blogservice: BlogService, private router: Router) {

  }

  ngOnInit() {
    this.getlist();
  }
  getlist() {
    let data: any = [];
    this._blogservice.getBlogDetail(data)
      .subscribe(
      response => {
        this.blogBO = response;
        console.log("GET BLOG", response);
      }

      )
  }
  readmore(blog) {

    this.router.navigate(['/ReadMore', blog._id]);

  }
  delete(blog) {

    this._blogservice.deleteblog(blog._id)
      .subscribe(
      response => {
        //   this.blogBO = response;
        this.getlist();
        console.log("GET BLOG", response);
      }

      )


  }
  edit(blog) {
    
        
     this.router.navigate(['/edit', blog._id]);

  }

}

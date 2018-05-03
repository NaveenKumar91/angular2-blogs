import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder, Validators, FormControl, ReactiveFormsModule } from '@angular/forms'
import { createblogService } from '../createblog/createblog.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogService } from '../bloglist/bloglist.service';
import { BloglistComponent } from "../bloglist/bloglist.component";
import { BlogDetailService } from '../blogdetail/blogdetail.service';
import { InputTextareaModule } from 'primeng/primeng';
@Component({
    selector: 'app-createblog',
    templateUrl: './createblog.component.html',
    styleUrls: ['./createblog.component.css'],
    providers: [createblogService, BlogService, BlogDetailService]
})
export class CreateblogComponent implements OnInit {
    blogId: any = [];
    blogBO: any = [];
    blogform = new FormGroup({
        Title: new FormControl(),
        Subtitle: new FormControl(),
        Blog: new FormControl(),
    });
    constructor(private _blogserviceid: BlogDetailService, private _NavbarService: createblogService, private router: Router, private _blogservice: BlogService, private route: ActivatedRoute) {
       
    }

    ngOnInit() {

       
    }


    submitblogForm(form) {
        let data: any = {};
        data.title = form.Title;
        data.subtitle = form.Subtitle;
        data.blogBody = form.Blog;
        this._NavbarService.createblog(data)
            .subscribe(
            response => {

                console.log("create BLOG", response);
                alert("Blog has been Created Successfully")
                this.router.navigate(['/Blog']);
            }

            )




    }

}

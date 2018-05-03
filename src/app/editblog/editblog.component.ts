import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder, Validators, FormControl, ReactiveFormsModule } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router';
import { BlogService } from '../bloglist/bloglist.service';
import { BloglistComponent } from "../bloglist/bloglist.component";
import { BlogDetailService } from '../blogdetail/blogdetail.service';
import { editblogService } from '../editblog/editblog.service';
import { InputTextareaModule } from 'primeng/primeng';
@Component({
    selector: 'app-createblog',
    templateUrl: './editblog.component.html',
    styleUrls: [],
    providers: [BlogService, BlogDetailService , editblogService]
})
export class EditblogComponent implements OnInit {
    blogId: any = [];
    blogBO: any = [];
    blogform = new FormGroup({
        Title: new FormControl(),
        Subtitle: new FormControl(),
        Blog: new FormControl(),
    });
    constructor(private _blogserviceid: BlogDetailService,private _editservice: editblogService, private router: Router, private _blogservice: BlogService, private route: ActivatedRoute) {
        this.route.params
            .map(params => params['id'])
            .subscribe(
            response => {
                this.blogId = response;
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


    submitblogForm(form) {
        let data: any = {};
        data.title = form.Title;
        data.subtitle = form.Subtitle;
        data.blogBody = form.Blog;

        this._editservice.edit(this.blogBO._id, data)
            .subscribe(
            response => {

                console.log("Edited BLOG", response);
                alert("Blog has been edited Successfully")
                this.router.navigate(['/Blog']);
            }

            )





    }

}

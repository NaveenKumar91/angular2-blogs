import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DropdownModule } from 'primeng/primeng';
import { FormsModule, FormGroup, FormBuilder, Validators, FormControl, ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BloglistComponent } from './bloglist/bloglist.component';
import { HttpModule } from "@angular/http";
import { BlogdetailComponent } from './blogdetail/blogdetail.component';
import { Routes, RouterModule } from '@angular/router'
import { routing } from "./app.routing";
import { NavbarComponent } from './navbar/navbar.component';
import { CreateblogComponent } from './createblog/createblog.component';
import { EditblogComponent } from './editblog/editblog.component';
@NgModule({
  declarations: [
    AppComponent,
    BloglistComponent,
    BlogdetailComponent,
    NavbarComponent,
    CreateblogComponent,
    EditblogComponent
  ],
  imports: [
    BrowserModule,
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule,
    routing,
    ReactiveFormsModule
  
    
  ],
  providers: [],
  bootstrap: [NavbarComponent]
})
export class AppModule { }

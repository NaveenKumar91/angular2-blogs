import { RouterModule, Routes } from "@angular/router";
import { BloglistComponent } from "./bloglist/bloglist.component";
import { BlogdetailComponent } from "./blogdetail/blogdetail.component";
import { AppComponent } from "./app.component";
import { CreateblogComponent } from "./createblog/createblog.component";
import { EditblogComponent } from "./editblog/editblog.component";
const APP_ROUTES: Routes = [
  { path: '', component: AppComponent, pathMatch: 'full' },
  { path: 'Create', component: CreateblogComponent, pathMatch: 'full' },
  { path: 'Blog', component: BloglistComponent, pathMatch: 'full' },
  { path: 'ReadMore/:id', component: BlogdetailComponent,pathMatch: 'full'  },
  { path: 'edit/:id', component: EditblogComponent,pathMatch: 'full'  }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
const routes: Routes = [
  {path:'',
  redirectTo:'navdash',
  pathMatch:'full'
},
  {path: 'admindash', 
component:AdminComponent,
  },
  {
    path:'userdash',
    component:UserComponent
  },
  {
    path:'navdash',
    component:HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
 
})
export class DashboardRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'',redirectTo:'users',pathMatch:'full'},
  {path: 'users', loadChildren:()=>import('./views/users/users.module').then(m=>m.UsersModule)},
  {path: 'dashboard', loadChildren:()=>import('./views/dashboard/dashboard.module').then(m=>m.DashboardModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

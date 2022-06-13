import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DashboardRoutingModule } from './dashboard-routing.module';
import { NavBarModule } from 'src/app/shared/nav-bar/nav-bar.module';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminComponent,
    HomeComponent,
    UserComponent
     ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NavBarModule,
    FormsModule,
    ReactiveFormsModule
    
  ]
})
export class DashboardModule { }

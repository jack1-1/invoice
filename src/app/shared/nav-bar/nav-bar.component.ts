import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  adminroute(){
    this.route.navigate(['/dashboard/admindash'])
  }

  userroute(){
    this.route.navigate(['/dashboard/userdash'])
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  submitForm=false;

  constructor(private fb: FormBuilder, private route:Router) {}

  ngOnInit() {
    this.createForm()
  }

  createForm(){
    this.loginForm=this.fb.group({
      email:['',[Validators.required,
      Validators.email,
      Validators.pattern('^.+@gmail.com$')]],
      password:['',[Validators.required,
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,}')]]
    })
  }

  get fc(){
    return this.loginForm.controls;
  }

  submit(){
    this.submitForm=true;
    if(this.loginForm.invalid){
    return;
  }
  this.route.navigate(['/dashboard/navdash'])
}
}

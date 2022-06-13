import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { PasswordValidator } from '../../../shared/passwordValidator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
   signUpForm!:FormGroup;
   submitForm=false;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.signUpForm=this.fb.group({
      email:['',[Validators.required,
        Validators.pattern('^.+@gmail.com$')]],
      phone:['',[Validators.required,
      Validators.pattern('^[0-9\-]*$'),
    Validators.minLength(8),
  Validators.maxLength(10)]],
      password:['',[Validators.required,
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      
      confirmPassword:['',Validators.required],
      }
     ,{validator:PasswordValidator}
      );
      
  } 
get f(){
 
return this.signUpForm.controls;
}

submit(){
  console.log(this.signUpForm)
  this.submitForm=false;
  if(this.signUpForm.invalid){
    return;
  }
}
}

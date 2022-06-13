import { AbstractControl } from "@angular/forms";

export function PasswordValidator(control:AbstractControl):{ [key:string]: boolean} | null {
const password=control.get('password');
//console.log(password?.value)
const confirmPassword=control.get('confirmPassword');
//console.log(confirmPassword?.value)


if(password?.pristine || confirmPassword?.pristine){
    return null
}
return password && confirmPassword && password.value != confirmPassword.value ? 
{'misMatch':true}:
null;
}
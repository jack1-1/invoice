import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { SharedServiceService } from '../../services/shared-service.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  formSubmit=false
  levels=['Text','Checkbox'];
  value:any;
  value1:any;
  value2:any;
  value3:any;
  value4:any;
  value5:any;
  value6:any;
  c1:any;
  c2:any
  c3:any
  c4:any
  c5:any
  c6:any
  c7:any
  data:any
  constructor(private sService:SharedServiceService,
   ){
    
   }

  ngOnInit(): void {
    this.value='Text'
    this.value1='Text'
    this.value2='Text'
    this.value3='Text'
    this.value4='Text'
    this.value5='Text'
    this.value6='Text'
    // if(this.ConfigInvoiceForm7.value['userMandatory']==true){
    //   this.ConfigInvoiceForm7.controls["displayName"].setValidators([Validators.required]);
    //   this.ConfigInvoiceForm7.controls["displayName"].updateValueAndValidity();
    // }
    if(this.ConfigInvoiceForm6.value['userMandatory']==true){
      this.ConfigInvoiceForm6.controls["displayName"].setValidators([Validators.required]);
      this.ConfigInvoiceForm6.controls["displayName"].updateValueAndValidity();
    }
    if(this.ConfigInvoiceForm5.value['userMandatory']==true){
      this.ConfigInvoiceForm5.controls["displayName"].setValidators([Validators.required]);
      this.ConfigInvoiceForm5.controls["displayName"].updateValueAndValidity();
    }
    if(this.ConfigInvoiceForm4.value['userMandatory']==true){
      this.ConfigInvoiceForm4.controls["displayName"].setValidators([Validators.required]);
      this.ConfigInvoiceForm4.controls["displayName"].updateValueAndValidity();
    }
    if(this.ConfigInvoiceForm3.value['userMandatory']==true){
      this.ConfigInvoiceForm3.controls["displayName"].setValidators([Validators.required]);
      this.ConfigInvoiceForm3.controls["displayName"].updateValueAndValidity();
    }
    if(this.ConfigInvoiceForm2.value['userMandatory']==true){
      this.ConfigInvoiceForm2.controls["displayName"].setValidators([Validators.required]);
      this.ConfigInvoiceForm2.controls["displayName"].updateValueAndValidity();
    }
    if(this.ConfigInvoiceForm1.value['userMandatory']==true){
      this.ConfigInvoiceForm1.controls["displayName"].setValidators([Validators.required]);
      this.ConfigInvoiceForm1.controls["displayName"].updateValueAndValidity();
    }
    // this.sService.currentMessage.subscribe(message=>{
    //   console.log(message);
    //   })
    const draft=localStorage.getItem("Step_1");
    if(draft){
      this.ConfigInvoiceForm7.setValue(JSON.parse(draft))
    }
    
  }

  ch1(e1:any){
    console.log(e1.checked);
    if(e1.checked){
      this.c1=e1.checked
      this.ConfigInvoiceForm1.controls["displayName"].setValidators([Validators.required]);
      this.ConfigInvoiceForm1.controls["displayName"].updateValueAndValidity();
      }
    else{
      this.ConfigInvoiceForm1.controls["displayName"].setValidators(null);
      this.ConfigInvoiceForm1.controls["displayName"].updateValueAndValidity();
      }
    
  }
  ch2(e2:any){
    if(e2.checked){
      this.c2=e2.checked
      this.ConfigInvoiceForm2.controls["displayName"].setValidators([Validators.required]);
      this.ConfigInvoiceForm2.controls["displayName"].updateValueAndValidity();
    }
    else{
      this.ConfigInvoiceForm2.controls["displayName"].setValidators(null);
      this.ConfigInvoiceForm2.controls["displayName"].updateValueAndValidity();
    }
  }
  ch3(e3:any){
    if(e3.checked){
      this.c3=e3.checked
      this.ConfigInvoiceForm3.controls["displayName"].setValidators([Validators.required]);
      this.ConfigInvoiceForm3.controls["displayName"].updateValueAndValidity();
    }
    else{
      this.ConfigInvoiceForm3.controls["displayName"].setValidators(null);
      this.ConfigInvoiceForm3.controls["displayName"].updateValueAndValidity();
    }
  }
  ch4(e4:any){
    if(e4.checked){
      this.c4=e4.checked
      this.ConfigInvoiceForm4.controls["displayName"].setValidators([Validators.required]);
      this.ConfigInvoiceForm4.controls["displayName"].updateValueAndValidity();
    }
    else{
      this.ConfigInvoiceForm4.controls["displayName"].setValidators(null);
      this.ConfigInvoiceForm4.controls["displayName"].updateValueAndValidity();
    }
  }
  ch5(e5:any){
    if(e5.checked){
      this.c5=e5.checked
      this.ConfigInvoiceForm5.controls["displayName"].setValidators([Validators.required]);
      this.ConfigInvoiceForm5.controls["displayName"].updateValueAndValidity();
    }
    else{
      this.ConfigInvoiceForm5.controls["displayName"].setValidators(null);
      this.ConfigInvoiceForm5.controls["displayName"].updateValueAndValidity();
    }
  }
  ch6(e6:any){
    if(e6.checked){
      this.c6=e6.checked
      this.ConfigInvoiceForm6.controls["displayName"].setValidators([Validators.required]);
      this.ConfigInvoiceForm6.controls["displayName"].updateValueAndValidity();
    }
    else{
      this.ConfigInvoiceForm6.controls["displayName"].setValidators(null);
      this.ConfigInvoiceForm6.controls["displayName"].updateValueAndValidity();
    }
  }
  // ch7(e7:any){
  //   if(e7.checked){
  //     // this.c7=e7.checked
  //     this.ConfigInvoiceForm7.controls["displayName"].setValidators([Validators.required]);
  //     this.ConfigInvoiceForm7.controls["displayName"].updateValueAndValidity();
  //   }
  //   else{
  //     this.ConfigInvoiceForm7.controls["displayName"].setValidators(null);
  //     this.ConfigInvoiceForm7.controls["displayName"].updateValueAndValidity();
  //   }
  // }

  ConfigInvoiceForm1=new FormGroup({
    fieldName: new FormControl({value: 'addParam2', disabled: true}),
    displayName: new FormControl(''),
    position: new FormControl('5'),
    inputType:new FormControl(''),
    configured:new FormControl(false),
    userMandatory:new FormControl(false),
  });
  ConfigInvoiceForm2=new FormGroup({
    fieldName: new FormControl({value: 'amount', disabled: true}),
    displayName: new FormControl('Amount to collect'),
    position: new FormControl('1'),
    inputType:new FormControl(''),
    configured:new FormControl(false),
    userMandatory:new FormControl(false),
  });
  ConfigInvoiceForm3=new FormGroup({
    fieldName: new FormControl({value: 'serviceAmount', disabled: true}),
    displayName: new FormControl('service Amount'),
    position: new FormControl('7'),
    inputType:new FormControl(''),
    configured:new FormControl(false),
    userMandatory:new FormControl(false),
  });
  ConfigInvoiceForm4=new FormGroup({
    fieldName: new FormControl({value: 'emailID', disabled: true}),
    displayName: new FormControl('Customer EmailID'),
    position: new FormControl('4'),
    inputType:new FormControl(''),
    configured:new FormControl(false),
    userMandatory:new FormControl(false),
  })
  ConfigInvoiceForm5=new FormGroup({
    fieldName: new FormControl({value: 'id', disabled: true}),
    displayName: new FormControl('Invoice No.'),
    position: new FormControl('2'),
    inputType:new FormControl(''),
    configured:new FormControl(false),
    userMandatory:new FormControl(false),
  });
  ConfigInvoiceForm6=new FormGroup({
    fieldName: new FormControl({value: 'mobileNo', disabled: true}),
    displayName: new FormControl('Customer Mobile No'),
    position: new FormControl('3'),
    inputType:new FormControl(''),
    configured:new FormControl(false),
    userMandatory:new FormControl(false),
  });
  ConfigInvoiceForm7=new FormGroup({
    fieldName: new FormControl({value: 'addParam1', disabled: true}),
    displayName: new FormControl('Additional Param 1'),
    position: new FormControl('6'),
    inputType:new FormControl(''),
    configured:new FormControl(false),
    userMandatory:new FormControl(false),
  })
  get f1(){
    return this.ConfigInvoiceForm1.controls
  }

  get f2(){
    return this.ConfigInvoiceForm2.controls
  }

  get f3(){
    return this.ConfigInvoiceForm3.controls
  }

  get f4(){
    return this.ConfigInvoiceForm4.controls
  }

  get f5(){
    return this.ConfigInvoiceForm5.controls
  }

  get f6(){
    return this.ConfigInvoiceForm6.controls
  }

  get f7(){
    return this.ConfigInvoiceForm7.controls
  }
   

  saveInvoice(){
   this.formSubmit=true;
    if (this.ConfigInvoiceForm1.invalid || this.ConfigInvoiceForm2.invalid ||
      this.ConfigInvoiceForm3.invalid || this.ConfigInvoiceForm4.invalid ||
      this.ConfigInvoiceForm5.invalid || this.ConfigInvoiceForm6.invalid ||
      this.ConfigInvoiceForm7.invalid 
      ) {
       return;
    }
  let data=[
    this.ConfigInvoiceForm7.value,
    { ...this.ConfigInvoiceForm1.value, displayName: this.ConfigInvoiceForm1.value.displayName.split(",") },
    this.ConfigInvoiceForm2.value,
    this.ConfigInvoiceForm4.value,
    this.ConfigInvoiceForm5.value,
    this.ConfigInvoiceForm6.value,
    this.ConfigInvoiceForm3.value
  ]
  console.log(data);
  console.log(this.ConfigInvoiceForm7.value);
  this.ConfigInvoiceForm7.valueChanges.pipe(filter(()=>this.ConfigInvoiceForm7.valid))
  .subscribe(val=>localStorage.setItem("STEP_1",JSON.stringify(val)));
  this.sService.setNewUserInfo(data)
  
  // console.log(data);
  }
  
  clear(){
    this.formSubmit=false;
    this.ConfigInvoiceForm1.reset();
    this.ConfigInvoiceForm2.reset();
    this.ConfigInvoiceForm3.reset();
    this.ConfigInvoiceForm4.reset();
    this.ConfigInvoiceForm5.reset();
    this.ConfigInvoiceForm6.reset();
    this.ConfigInvoiceForm7.reset();
  }
}


import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { SharedServiceService } from '../../services/shared-service.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  formSubmit=false;
  mData:any;
  sAmount=0
  bAmount=0
  fData:any
  subscription:any
  data:any={}
  checkP1:any
  checkP2:any
  constructor(
    private sService:SharedServiceService) {
      this.subscription=Subscription
     }
    
  ngOnInit(): void {
    // this.mData=this.userService.userValue.merchants;
    // for(let i=0;i<this.mData.length;i++){
    //   if(this.mData[i].id=='ALL'){
    //     console.log(this.mData[i]);
    //     this.mData.splice(i,1)
    //     console.log(this.mData);
    //   }
      
    // }
    // this.invoiceForm.get('serviceAmount').valueChanges.subscribe(value1=>{
    //   this.sAmount=value1
    //   this.invoiceForm.controls.amount.setValue(this.bAmount+this.sAmount)
    // })
    // this.invoiceForm.get('basicAmount').valueChanges.subscribe(value=>{
    //   this.bAmount=value
    //   this.invoiceForm.controls.amount.setValue(this.sAmount+this.bAmount)
    // })
    this.subscription=this.sService.getNewUserInfo().subscribe((info:any)=>{
      this.data=info;
      console.log(info);

      for(let i=0;i<info.length;i++)
      {
        if(info[i].displayName=='Additional Param 1')
        {
        this.checkP1=info[i].configured
        }
        if(info[i].displayName=='Additional Param 1' && info[i].userMandatory==true)
        {
        this.invoiceForm.controls["addlParam1"].setValidators([Validators.required]);
        this.invoiceForm.controls["addlParam1"].updateValueAndValidity();
        break;
        }
        }
    })
  }
 
  invoiceForm=new FormGroup({
    addlParam2: new FormControl(''),
    addlParam1: new FormControl(''),
    id: new FormControl(''),
    amount: new FormControl(''),
    mobileNo: new FormControl(''),
    emailID: new FormControl('',[
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),]),
    // basicAmount:new FormControl(),
    // serviceAmount: new FormControl(),
  })

  get f(){
    return this.invoiceForm.controls
  }
  createInvoice(){
    this.formSubmit=true;
    if (this.invoiceForm.invalid) {
      return;
    }
    // console.log(this.invoiceForm.value);
    let data={
      requestType: "saveInvoice",
      invoiceDetails:this.invoiceForm.value
      }
      console.log(data);
      // this.invoiceService.createInvoice(data).subscribe((res:any)=>{
      //   console.log(res);
      //   this.notificationService.showInfo(res.message,'');
      //   if(res.message)
      //   this.formSubmit=false;
      //   this.invoiceForm.reset()
      //   })
    
  }

  clearForm(){
    this.formSubmit=false;
    this.invoiceForm.reset()
  }
  
  // ngOnDestroy() {
  //   console.log(this.subscription);
    
  //   this.subscription.unsubscribe();
  // }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';
import { Customer } from '../form-reactiv/customer';

@Component({
  selector: 'pm-real-form-reactive',
  templateUrl: './real-form-reactive.component.html',
  styleUrls: ['./real-form-reactive.component.css']
})
export class RealFormReactiveComponent implements OnInit {
  customerForm:FormGroup;
  customer = new Customer();
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.customerForm = this.fb.group({
      firstName:['',[Validators.required,Validators.minLength(3)]],
      lastName:['',[Validators.required,Validators.maxLength(50)]],
      email:['',[Validators.required,Validators.email]],
      phone:'',
      notification:'email',
      sendCatalog:true
    });
    // this.customerForm = new FormGroup({
    //   firstName:new FormControl(),
    //   lastName:new FormControl(),
    //   email:new FormControl(),
    //   sendCatalog:new FormControl(true)
    // });
    // {value:'n/a',disabled:true} for disabled
  }

  save() {
    console.log(this.customerForm);
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }

  populateTestData(): void{
    this.customerForm.setValue({
      firstName:'Miriam',
      lastName:'Walinsky',
      email:'Walinsky@gmail.com',
      sendCatalog:false
    })
  }

  setNotification(val:string):void{
      let phoneControle = this.customerForm.get('phone');
      if(val ==='text'){
        phoneControle.setValidators(Validators.required);
      }else{
        phoneControle.clearValidators();
      }
      phoneControle.updateValueAndValidity();
    }
}

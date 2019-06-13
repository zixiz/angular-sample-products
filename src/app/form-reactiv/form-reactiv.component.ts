import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from './customer';

@Component({
  selector: 'pm-form-reactiv',
  templateUrl: './form-reactiv.component.html',
  styleUrls: ['./form-reactiv.component.css']
})
export class FormReactivComponent implements OnInit {
  customer = new Customer();

  constructor() { }

  ngOnInit() {
  }

  save(customerForm: NgForm) {
    console.log(customerForm.form);
    console.log('Saved: ' + JSON.stringify(customerForm.value));
  }

}

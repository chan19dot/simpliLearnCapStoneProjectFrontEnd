import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-sign-up',
  templateUrl: './customer-sign-up.component.html',
  styleUrls: ['./customer-sign-up.component.css']
})
export class CustomerSignUpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  signUp(result: { fname: any; lname: any; cname: any; mailid: any; phoneno: any; psw: any; psw2: any; accountNumber: any; accountNumber2: any; }){
    console.log(result.fname);
    console.log(result.lname);
    console.log(result.cname);
    console.log(result.mailid);
    console.log(result.phoneno);
    console.log(result.psw);
    console.log(result.psw2);
    console.log(result.accountNumber);
    console.log(result.accountNumber2);
  }

}

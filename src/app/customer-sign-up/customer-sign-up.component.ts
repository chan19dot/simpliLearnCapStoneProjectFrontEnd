import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

const signupObject = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  userName: '',
  pasword: '',
  savingsAmount: 1000,
  primaryAmount: 2000,
  accountNumber: 0,
};

@Component({
  selector: 'app-customer-sign-up',
  templateUrl: './customer-sign-up.component.html',
  styleUrls: ['./customer-sign-up.component.css'],
})
export class CustomerSignUpComponent implements OnInit {
  constructor(private service: ServiceService) {}

  ngOnInit(): void {}

  signUp(result: {
    fname: any;
    lname: any;
    cname: any;
    mailid: any;
    phoneno: any;
    psw: any;
    psw2: any;
    accountNumber: any;
    accountNumber2: any;
  }) {
    signupObject.firstName = result.fname;
    signupObject.lastName = result.lname;
    signupObject.userName = result.cname;
    signupObject.accountNumber = Number(result.accountNumber);
    signupObject.email = result.mailid;
    signupObject.phoneNumber = result.phoneno;
    signupObject.pasword = result.psw;
    this.service.postCustomerSignup(signupObject).subscribe((res) => {
      if (res) {
        alert('Sign Up Succesful, You can now login!');
      }
    });
  }
  send(): void {}
}

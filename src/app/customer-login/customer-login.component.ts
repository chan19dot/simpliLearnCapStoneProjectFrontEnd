import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onLogin(result: { cname: any; psw: any; }){
    console.log(result.cname);
    console.log(result.psw);
  }

}

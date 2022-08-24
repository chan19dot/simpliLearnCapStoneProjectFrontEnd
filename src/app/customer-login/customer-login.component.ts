import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onLogin(result: { cname: any; psw: any; }){
    console.log(result.cname);
    console.log(result.psw);
    if(this.loginCheck()){
      sessionStorage.setItem("Customer",result.cname);
      this.router.navigate(['/icinBank']);
    }
    
  }

  loginCheck():boolean{
    return true;
  }

}

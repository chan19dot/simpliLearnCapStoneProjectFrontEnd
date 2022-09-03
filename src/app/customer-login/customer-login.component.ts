import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { ServiceService } from '../service.service';

const customer={
  userName:"",
  pasword:""
}


@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {
  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ServiceService
  ) { }

  ngOnInit(): void {
  }

  onLogin(result: { cname: any; psw: any; }){
    customer.userName = result.cname;
    customer.pasword =  result.psw;
    console.log(customer);
    this.loginCheck(customer);
      
    
    
  }

  loginCheck(obj: any):void{

    this.service.postCustomerLogin(obj).subscribe((res)=>{
      console.log(res);
      if(res.login){
        localStorage.setItem("CustomerId", res.id);
        this.router.navigate(['/icinBank']);
      }
      else{
        alert("Check your credentials or Wait for admin to provide you access")
      }
    })
   
  }

}

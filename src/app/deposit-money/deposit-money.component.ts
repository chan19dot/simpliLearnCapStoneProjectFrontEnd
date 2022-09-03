import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-deposit-money',
  templateUrl: './deposit-money.component.html',
  styleUrls: ['./deposit-money.component.css']
})
export class DepositMoneyComponent implements OnInit {
  public data: any=[];
  constructor(private service: ServiceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("CustomerId")){
      this.service.getCustomerDataById(parseInt(localStorage.getItem("CustomerId")!)).subscribe(res =>{
        this.data= res
      })
      
    }
    else{
      alert("Access forbidden you're being redirected to login page");
      this.router.navigate(["/login"])
    }
  }

  depositMoney(result:any[]):void{
    this.service.postDepositMoney(this.data.id,result).subscribe(res=>{
      if(res){
        alert("Money depositted successfully!");
        this.router.navigate(["/icinBank"]);
            }
      else{
        alert("Transaction declined, try after some time");
      }
    })
  }
  logoutHandler():void{
    localStorage.removeItem("CustomerId");
    this.router.navigate(["/login"]);
  }
}

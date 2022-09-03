import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-withdraw-money',
  templateUrl: './withdraw-money.component.html',
  styleUrls: ['./withdraw-money.component.css']
})
export class WithdrawMoneyComponent implements OnInit {

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

  withdrawMoney(result:any[]):void{
    console.log(result);
    this.service.postWithdrawMoney(this.data.id,result).subscribe((res)=>{
      if(res){
        alert("Money withdrawal successfull!");
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

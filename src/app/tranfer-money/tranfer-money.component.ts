import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-tranfer-money',
  templateUrl: './tranfer-money.component.html',
  styleUrls: ['./tranfer-money.component.css']
})
export class TranferMoneyComponent implements OnInit {

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

  transferMoney(result:any[]):void{
    const sendData= {...result, customerId: this.data.id};
    this.service.postTransfer(sendData).subscribe((res)=>{
      if(res){
        alert("Money Transferred successfull!");
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

import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-customer-main-screen',
  templateUrl: './customer-main-screen.component.html',
  styleUrls: ['./customer-main-screen.component.css']
})
export class CustomerMainScreenComponent implements OnInit {
  public data: any=[];
  constructor(
    private service: ServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

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
  logoutHandler():void{
    localStorage.removeItem("CustomerId");
    this.router.navigate(["/login"]);
  }

  requestChequeBook():void{
    this.service.postRequestChequeBook(parseInt(localStorage.getItem("CustomerId")!)).subscribe(res=>{
      if(res){
        alert("ChequeBook Requested Successfully")
      }
      else{
        alert("there was an error requesting ChequeBook, please try after some time")
      }
    });

  }

  routeToDeposit():void{
    this.router.navigate(["icinBank/Deposit"]);
  }

  routeToWithDraw():void{
    this.router.navigate(["icinBank/Withdraw"])
  }

  routeToTransferMoney():void{
    this.router.navigate(["icinBank/transfermoney"])
  }

}

import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-admin-screen',
  templateUrl: './admin-screen.component.html',
  styleUrls: ['./admin-screen.component.css']
})
export class AdminScreenComponent implements OnInit {

  public data: any=[];

  constructor(private service: ServiceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    
    if(localStorage.getItem("admin")){
      alert("Hello, you are logged in ");
      
      this.getData()
    }
    else{
      alert("Access forbidden you're being redirected to login page");
      this.router.navigate(["/Adminlogin"])
    }
  }

  getData(){
      this.service.getAllUsers().subscribe((res)=>{
        this.data = res;
        console.log(this.data);
      })
  }
  reloadPage(){
    window.location.reload();
  }
  postBlock(customer:any){
    this.service.postBlock(customer).subscribe((res)=>{
      console.log(res);
    })
    // console.log(customer);
    // this.reloadPage();
  }
  provideAccess(customer:any){
    this.service.postProvideAccess(customer).subscribe((res)=>{
      console.log(res);
    })
  }
  logOut(){
    localStorage.removeItem("admin");
    this.router.navigate(["/Adminlogin"])
  }
  provideChequeBook(customer:any){
    console.log(customer);
    this.service.postAuthorizeCheque(customer).subscribe((res)=>{
      if(res){
        alert("cheque book issued");
      }
    })
    
  }

}

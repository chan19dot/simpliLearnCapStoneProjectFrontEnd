import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private service : ServiceService) {
    
   }

  ngOnInit(): void {
    console.log("adminLogin component")
  }

  onLogin(result: { uname: string; psw: string; }):void{
    console.log(result.uname);
    console.log(result.psw);
    //connect to back end get(/authenticate/)
    this.service.getSWAPI().subscribe((res)=>{
      console.log(res);
    })
  }

}

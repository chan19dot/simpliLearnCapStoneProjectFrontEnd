import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';

const loginObj = {
  userName: '',
  password: '',
};

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {
  constructor(
    private service: ServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log('adminLogin component');
  }

  onLogin(result: { uname: string; psw: string }): void {
    console.log(result.uname);
    console.log(result.psw);
    loginObj.userName = result.uname;
    loginObj.password = result.psw;

    
    this.service.getLoginStatus(loginObj).subscribe((res) => {
      if (res.login) {
        localStorage.setItem("admin",loginObj.userName)
        this.router.navigate(['/Admin']);
      }
      else{
        alert("please check your credentials");
      }
    });
  }
}

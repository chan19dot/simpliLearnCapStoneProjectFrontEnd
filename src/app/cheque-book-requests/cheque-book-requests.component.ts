import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cheque-book-requests',
  templateUrl: './cheque-book-requests.component.html',
  styleUrls: ['./cheque-book-requests.component.css']
})
export class ChequeBookRequestsComponent implements OnInit {

  constructor(private service: ServiceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if(!localStorage.getItem("CustomerId")){
      alert(" you are being redirected to login page");
      this.router.navigate(["/login"])
    }

  }

}

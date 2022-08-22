import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerMainScreenComponent } from './customer-main-screen/customer-main-screen.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { AdminScreenComponent } from './admin-screen/admin-screen.component';
import { CustomerRequestsComponent } from './customer-requests/customer-requests.component';
import { CustomerSignUpComponent } from './customer-sign-up/customer-sign-up.component';
import { ChequeBookRequestsComponent } from './cheque-book-requests/cheque-book-requests.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes=[
  {
    path: 'Adminlogin', component: AdminLoginComponent
  },
  {
    path: 'login', component: CustomerLoginComponent
  },
  {
    path: 'icinBank', component: CustomerMainScreenComponent
  },
  {
    path: 'userProfile', component: CustomerProfileComponent
  },
  {
    path: 'Admin', component: AdminScreenComponent
  },
  {
    path: 'Admin/CustomerRequests', component: CustomerRequestsComponent
  },
  {
    path: 'Admin/CustomerChequeBookRequest', component: ChequeBookRequestsComponent
  },
  {
    path: 'signup', component: CustomerSignUpComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

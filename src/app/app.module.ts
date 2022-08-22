import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerMainScreenComponent } from './customer-main-screen/customer-main-screen.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { AdminScreenComponent } from './admin-screen/admin-screen.component';
import { CustomerRequestsComponent } from './customer-requests/customer-requests.component';
import { CustomerSignUpComponent } from './customer-sign-up/customer-sign-up.component';
import { ChequeBookRequestsComponent } from './cheque-book-requests/cheque-book-requests.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    CustomerLoginComponent,
    CustomerMainScreenComponent,
    CustomerProfileComponent,
    AdminScreenComponent,
    CustomerRequestsComponent,
    CustomerSignUpComponent,
    ChequeBookRequestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

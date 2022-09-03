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
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TranferMoneyComponent } from './tranfer-money/tranfer-money.component';
import { DepositMoneyComponent } from './deposit-money/deposit-money.component';
import { WithdrawMoneyComponent } from './withdraw-money/withdraw-money.component';


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
    ChequeBookRequestsComponent,
    LandingPageComponent,
    TranferMoneyComponent,
    DepositMoneyComponent,
    WithdrawMoneyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

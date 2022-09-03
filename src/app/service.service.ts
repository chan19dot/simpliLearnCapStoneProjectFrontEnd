import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  getTest(){
    return this.http.get<any>("http://localhost:8085/")
  }
  getSWAPI(){
    return this.http.get<any>("https://swapi.dev/api/people/1")
  }
  postCustomerSignup(obj:any){
    return this.http.post<any>("http://localhost:8085/customerSignUp",obj)
  }
  getLoginStatus(obj:any){
    return this.http.post<any>("http://localhost:8085/login",obj)
  }

  getAllUsersWithNoAccess(){
    return this.http.get<any>("http://localhost:8085/AllCustomersWithNoAccess")
  }

  getAllUsers(){
    return this.http.get<any>("http://localhost:8085/AllCustomers")
  }

  postBlock(obj:any){
    return this.http.post<any>("http://localhost:8085/blockCustomer",obj)
  }

  postCustomerLogin(obj:any){
    return this.http.post<any>("http://localhost:8085/customerLogin",obj);
  }

  getCustomerDataById(id:number){
    return this.http.get<any>(`http://localhost:8085/getCustomerById?id=${id}`);
  }

  postRequestChequeBook(id:number){
    return this.http.post<any>(`http://localhost:8085/requestChequeBook?id=${id}`,{
      "id": id
    });
  }
  postDepositMoney(id:number, dep:any){
    return this.http.post<any>("http://localhost:8085/transaction",{
      "customerId": id,
      "amount": dep.deposit,
      "isDeposit":true
    });
  }
  postWithdrawMoney(id:number, dep:any){
    return this.http.post<any>("http://localhost:8085/transaction",{
      "customerId": id,
      "amount": dep.deposit,
      "isDeposit":false
    });
  }
  postTransfer(obj:any){
    return this.http.post<any>("http://localhost:8085/Transfer",obj);
  }

  postAuthorizeCheque(customer:any){
    return this.http.post<any>("http://localhost:8085/AuthorizeCheque",customer);
  }
  postProvideAccess(customer:any){
    return this.http.post<any>("http://localhost:8085/AuthorizeAccess",customer);
  }
 

}

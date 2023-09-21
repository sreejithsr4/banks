import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServService implements OnInit{

  constructor(private http:HttpClient) { }
  ngOnInit(): void {
  
  }
baseurl:any="http://localhost:5006"
//api to create account
accountcreate(accno:any, psw:any, username:any){
  const bodyData={accno,psw,username}
  return this.http.post(`${this.baseurl}/bankuser/create_account`,bodyData)
}
//api to login
accountlogin(accno:any,psw:any){
  const bodyData={accno,psw}
  return this.http.post(`${this.baseurl}/bankuser/login`,bodyData)
}
getBalance(accno:any){
  return this.http.get(`${this.baseurl}/bankuser/balance/${accno}`)
}
moneyTransfer(rAcno:any,sAcno:any,psw:any,amount:any,date:any){
 const bodyData={rAcno,sAcno,psw,amount,date}
 return this.http.post(`${this.baseurl}/bankuser/money-transfer`,bodyData)

}
accountStatementApi(accno:any){
  return this.http.get(`${this.baseurl}/bankuser/account-statement/${accno}`)
}
accountDelete(accno:any){
  return this.http.delete(`${this.baseurl}/bankuser/delete-account/${accno}`)
}

}

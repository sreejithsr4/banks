import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
const options={
  headers:new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})
export class ServService implements OnInit{

  constructor(private http:HttpClient) { }
  ngOnInit(): void {
  
  }
getToken(){
  //create header object
  const headers = new HttpHeaders()
  if(localStorage.getItem("token")){
    const token = JSON.parse(localStorage.getItem("token") || "")
    options.headers=headers.append("access_token",token)
  }

  return options
}



baseurl:any="https://banks-server.onrender.com"
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
  return this.http.get(`${this.baseurl}/bankuser/balance/${accno}`,this.getToken())
}
moneyTransfer(rAcno:any,sAcno:any,psw:any,amount:any,date:any){
 const bodyData={rAcno,sAcno,psw,amount,date}
 return this.http.post(`${this.baseurl}/bankuser/money-transfer`,bodyData,this.getToken())

}
accountStatementApi(accno:any){
  return this.http.get(`${this.baseurl}/bankuser/account-statement/${accno}`,this.getToken())
}
accountDelete(accno:any){
  return this.http.delete(`${this.baseurl}/bankuser/delete-account/${accno}`,this.getToken())
}

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServService {

  constructor(private http:HttpClient) { }
baseurl:any="http://localhost:5006"
//api to create account
accountcreate(accno:any, psw:any, uname:any){
  const bodyData={accno,psw,uname}
  return this.http.post(`${this.baseurl}/bankuser/create_account`,bodyData)
}
}

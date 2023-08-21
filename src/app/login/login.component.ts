import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServService } from '../BankServices/serv.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  sdata:any
constructor(private route:Router,private ds:ServService){


}
ngOnInit(): void {
  setTimeout(()=>{this.ds.serviceMethod()},2000)
  
this.sdata=this.ds.data
}
login(){
  this.route.navigateByUrl("home")
}
}

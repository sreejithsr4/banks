import { Component, OnInit } from '@angular/core';
import { ServService } from '../BankServices/serv.service';
import { FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DatePipe]
})
export class HomeComponent implements OnInit {
  //moneytransfer form
  moneyTransfer = this.fb.group({
    accno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    amount: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw: ['', [Validators.required, Validators.pattern('[0-9a-z]+')]]
  })


  name: any = ""
  acno: any = ""
  bal: any = ""
  myDate: any = new Date();
  message: any = ""
  msgClr = true
  cAcno:any=""



  constructor(private service: ServService, private fb: FormBuilder, private date: DatePipe, private rout:Router) {
    this.myDate = this.date.transform(this.myDate, 'yyyy-MM-dd');
  }
  ngOnInit(): void {


    if (localStorage.getItem("userName")) {
      this.name = localStorage.getItem("userName")
    }
    if (localStorage.getItem("currentacno")) {
      this.acno = JSON.parse(localStorage.getItem("currentacno") || "")
    }
    if(!localStorage.getItem("currentacno")){
      this.rout.navigateByUrl("")
    }

  }
  profileview() {
    if (localStorage.getItem("currentacno")) {
      this.acno = JSON.parse(localStorage.getItem("currentacno") || "")
    }
    if (localStorage.getItem("userName")) {
      this.name = localStorage.getItem("userName")
    }

  }


  balance() {
    if (localStorage.getItem("currentacno")) {
      this.acno = JSON.parse(localStorage.getItem("currentacno") || "")
      this.service.getBalance(this.acno).subscribe({
        next: (result: any) => {
          this.bal = result.message
        },
        error: (result: any) => {
          alert(result.error.message)
        }
      })

    }


  }
  transfer() {
    this.myDate = this.date.transform(this.myDate, 'medium');
    var rAcno = this.moneyTransfer.value.accno
    var sAcno = this.acno
    var psw = this.moneyTransfer.value.psw
    var amount = this.moneyTransfer.value.amount
    var date = this.myDate
    console.log(this.myDate);
    if (this.moneyTransfer.valid) {
      if (rAcno == sAcno) {
        this.message = "enter valid account number"
        this.msgClr = false

      }
      else {
        this.service.moneyTransfer(rAcno, sAcno, psw, amount, date).subscribe({
          next: (result: any) => {
            this.message = result.message
            this.msgClr = true

          },
          error: (result: any) => {
            this.message = result.error.message
            this.msgClr = false
          }

        })

      }


    }
    else {
      this.message = "Money Transfer form not valid"
      this.msgClr = false

    }

  }
  logout() {
    
      localStorage.removeItem("userName")
     localStorage.removeItem("currentacno")
    this.rout.navigateByUrl("")
  
  }
  deleteAccount(){
    if (localStorage.getItem("currentacno")) {
      this.cAcno = JSON.parse(localStorage.getItem("currentacno") || "")
      
      
    }
  

  }
  pcancel(){
      this.cAcno=""
  }
  pdelete(event:any){
   
   
    
      this.service.accountDelete(event).subscribe({
        next:(data:any)=>{
          alert(data.message)
          this.logout()
        }
      })

   
    
  }



}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServService } from '../BankServices/serv.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm = this.fb.group({
    accno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw: ['', [Validators.required, Validators.pattern('[a-zA-z0-9]{2,10}')]]
  })
  constructor(private route: Router, private ds: ServService, private fb: FormBuilder) {


  }
  ngOnInit(): void {

  }

  login() {
    var path = this.loginForm.value
    var accno = path.accno
    var psw = path.psw

    if (this.loginForm.valid) {
      this.ds.accountlogin(accno, psw).subscribe({
        next: (result: any) => {
          alert(result.message)
          this.route.navigateByUrl("home")
          //store account number in local storage
          localStorage.setItem("currentacno", JSON.stringify(accno))
          localStorage.setItem("userName", result.currentUser)
          localStorage.setItem("token",JSON.stringify(result.token))

        },
        error: (result: any) => {
          alert(result.error.message)
        }
      })
    }
    else {
      alert('loginform not valid')
    }

  }

}




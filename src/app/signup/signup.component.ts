import { Component, OnInit } from '@angular/core';
import { ServService } from '../BankServices/serv.service';
import { Route, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  pswCheck:any=false
  //model form for signup
  signupForm=this.fb.group({
    accno:['',[Validators.required,Validators.pattern('[0-9]+')]],
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z ]+')]],
    psw:['',[Validators.required,Validators.pattern('[a-zA-z0-9]{5,10}')]],
    cpsw:['',[Validators.required,Validators.pattern('[a-zA-z0-9]{5,10}')]]

  })

  constructor(private router:Router,private fb:FormBuilder,private service:ServService){}
  ngOnInit(): void {

  }
  
  signup(){
    
    var path=this.signupForm.value
    var accno=path.accno
    var uname=path.uname
    var psw=path.psw
    var cpsw=path.cpsw
    if(cpsw=psw){
      this.pswCheck=false
    }
    else{
      this.pswCheck=true
    }
    if(this.signupForm.valid){
      alert("valid")
     }
    else{
      alert("invalid")
    }

//api call
this.service.accountcreate(accno,psw,uname).subscribe({
  next:(result:any)=>{
    alert(result.message)
this.router.navigateByUrl("")
  },
  error:(result:any)=>{
    alert(result.error.message)
    
    
  }
})
  }


}

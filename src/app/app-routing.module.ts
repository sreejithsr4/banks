import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { Statement } from '@angular/compiler';
import { StatementComponent } from './statement/statement.component';



const routes: Routes = [ {path:"",component:LoginComponent},
{path:"signup",component:SignupComponent},
{path:"home",component:HomeComponent},
{path:"statement",component:StatementComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

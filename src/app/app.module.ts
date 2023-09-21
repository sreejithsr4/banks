import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { DatePipe } from '@angular/common';
import { StatementComponent } from './statement/statement.component';
import { FilterPipe } from './bankPipes/filter.pipe';
import { DeleteComponent } from './delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    SignupComponent,
    StatementComponent,
    FilterPipe,
    DeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DatePipe
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]

})
export class AppModule { }

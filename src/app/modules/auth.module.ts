import { AuthTabsComponent } from '../components/auth-tabs/auth-tabs.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../components/login/login.component';
import { SignupComponent } from '../components/signup/signup.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/Forms';
import {ReactiveFormsModule} from '@angular/Forms';


@NgModule({
  imports: [
    CommonModule, HttpClientModule,FormsModule,ReactiveFormsModule],
  declarations: [AuthTabsComponent, LoginComponent, SignupComponent],
  exports: [
      AuthTabsComponent, LoginComponent, SignupComponent]
})
export class AuthModule {}

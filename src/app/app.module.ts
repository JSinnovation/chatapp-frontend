import { AuthRoutingModule } from './modules/auth-routing.module';
import { AuthModule } from './modules/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AuthService} from './services/auth.service'
import {HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent],
  imports: [
    BrowserModule,
    AuthModule,
    AuthRoutingModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}

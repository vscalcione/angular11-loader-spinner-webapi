import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClient } from '@angular/common/http';
import { EmployeeDetailsComponent } from './empoyeesdetails/empoyeesdetails.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';

@NgModule({
  declarations: [AppComponent, EmployeeDetailsComponent, EmployeedetailsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClient, NgxSpinnerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { NgxSprinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css'],
})
export class EmployeedetailsComponent implements OnInit {
  employee: any;

  constructor(
    private employeeService: EmployeeService,
    private SpinnerService: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.getEmployeesDetails();
  }

  getEmployeesDetails() {
    this.spinnerService.show();
    this.employeeService.getEmployeesDetails().subscribe((data: any) => {
      this.employee = data;
      console.log(this.employee);
      this.spinnerService.hide();
    });
  }
}

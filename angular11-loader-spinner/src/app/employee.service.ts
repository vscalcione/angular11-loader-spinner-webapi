import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  url: any;

  constructor(private http: HttpClient) {}

  getEmployeesDetails(): any {
    this.url = 'http://localhost:56932/api/Employee/EmployeeDetails';
    return this.http.get(this.url);
  }
}

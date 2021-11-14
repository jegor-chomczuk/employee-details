import { Component, OnInit } from '@angular/core';
import { Employees } from 'src/app/services/employee.service';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeList!: Employees[];

  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.initEmployees();
  }

  initEmployees(): void {
    this.employeeList = [];
    this.employeeService.getEmployees().subscribe(dataResult => {
      this.employeeList = dataResult;
    })
  }

  deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id).subscribe();
  }

  deleteElement(index: number): void {
    this.employeeList.splice(index, 1);
  }
}
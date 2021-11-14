import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Employees, EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  
  @Input()
  employeeInfo!: Employees;

  @Input()
  index!: number;

  @Output()
  deleteEmployeeEvent = new EventEmitter();

  @Output()
  deleteElementEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  delete(index: number, id: number): void {
    this.deleteElementEvent.emit(index);
    this.deleteEmployeeEvent.emit(id);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id!: number;
  employee!: Employee;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employee = new Employee(1, "", "", 1, "", "");
    this.id = this.route.snapshot.params['id'];
    console.log("check id", this.id);
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data)
        this.employee = data;
    console.log("check data", this.employee);
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['employees']);
  }
}

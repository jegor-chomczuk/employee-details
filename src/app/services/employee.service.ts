import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private http: HttpClient
  ) { }

  getEmployees(): Observable<Employees[]> {
    return this.http.get<Employees[]>('http://localhost:8080/employee');
  }

  deleteEmployee(id: number): Observable<{}> {
    return this.http.delete('http://localhost:8080/employee/' + id);
  }
}

export interface Employees {
  id: number,
  name: string,
  phoneNumber: string,
  officeNumber: string,
  position: string,
  manager: string  
}
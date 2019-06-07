import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  // public _link:string="/assets/api/employee.json";
  public _link:string="/assets/api/employee.json";

  constructor(private http:HttpClient) { }
  getEmployee():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._link);
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  getEmployee(){
    return [{id:1, name:"Aditya", skill:"Nothing"},
            {id:2, name:"Shivam", skill:"Nothing left"},
            {id:3, name:"Abhinav", skill:"Compe+DS"},          
            {id:4, name:"Sunny", skill:"Compe"}];
  }
}

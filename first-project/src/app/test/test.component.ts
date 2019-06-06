import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styles: [` p{
    color: green
  }
  .active{
    height: 100px;
    width:100px;
  }
  .deactive{
    height: 0px;
    width: 0px;
  }`]
})
export class TestComponent implements OnInit {
  // public inputText:string="";
  // public isChecked:Boolean = false;
  // public btnContent:string = "Show";
  public employees;
  constructor(private emp:EmployeeService) { }
  ngOnInit() {
    this.employees = this.emp.getEmployee();
  }
  // onClick(){
  //   if(this.btnContent=="Show"){ 
  //     this.isChecked=true;
  //     this.btnContent="Hide";
  //   }
  //   else{ 
  //     this.isChecked=false;
  //     this.btnContent="Show";
  //   }
  // }
}

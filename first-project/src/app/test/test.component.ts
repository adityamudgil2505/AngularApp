import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

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
  public inputText:string="";
  constructor() { }
  ngOnInit() {
  }
}

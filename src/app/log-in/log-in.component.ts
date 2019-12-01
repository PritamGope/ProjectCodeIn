import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  
  constructor() {
    console.log("I am inside constructor");
   }

  ngOnInit() {
    console.log("I am inside ngOnInit")
  }

}

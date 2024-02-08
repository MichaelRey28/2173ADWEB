import { Component, OnInit } from '@angular/core';
import { Observable, interval, map } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `<div style="text-align: center;">
  <h3>Decimal Pipe</h3>
  <p>{{decimalNum1 | number}}</p>
  <p>{{decimalNum2 | number}}</p>`
})
export class AppComponent {
  title = 'Midterm1';
  presentDate = new Date();
  time$: Observable<Date>;

  //JSON PIPE
  data: object = {
    name: 'Winston', age: 25, food:'Ramen',
    language: [
      {lname:'JS', level: 'Wizard'},
      {lname:'Python', level: 'Average'},
      {lname:'Cobol', level: 'Beginner'},
    ]
  }
  //Currency Pipe
  price : number = 20000;
  //SLICE PIPE
  Fruits = ["Apple", "Orange", "Grapes", "Mango", "Kiwi", "Pomegranate"];
  
  //Decimal PIPE
  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;
  ngOnInit(){}
  //ASYNC PIPE
  constructor() {
    this.time$ = interval(1000).pipe(
      map(() => new Date())
    )
  }
  //Percent PIPE
  a: number = 0.259;
  b: number = 1.3495;
}

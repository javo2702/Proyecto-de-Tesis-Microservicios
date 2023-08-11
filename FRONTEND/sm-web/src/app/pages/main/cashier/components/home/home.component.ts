import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  currentIndex:number =1
  pagination:string[] = []
  previous(){}
  toNumber(p:string){}
  next(){}
}

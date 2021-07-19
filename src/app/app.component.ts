import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'En-Quotes';
  quotes:string[];
  constructor(){
    this.quotes =['Life is what happens ','Get busy living or get busy dying','You only live once']
    
  }
}

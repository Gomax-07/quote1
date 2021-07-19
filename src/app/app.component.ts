import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'En-Quotes';
  

    quotes:Quote[]=[
      {id:1, name:'The purpose of our lives is to be happy'},
    {id:2,name:'Life is what happens'},
    {id:3,name:'Get busy living or get busy dying'},
    {id:4,name:'You only live once'},
    {id:5,name:'If you want to live a happy life, tie it to a goal, not to people or things'},
   

    ];
    
  }


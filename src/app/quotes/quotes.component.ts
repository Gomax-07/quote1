import { Component, OnInit } from '@angular/core';
import {QUOTES} from '../models/mock-quotes'
import {Quote} from '../models/Quote'
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes = QUOTES;
  selectedQuote?: Quote;


  constructor() { }

  ngOnInit(): void {

  }

  OnSelect(quote: Quote):void {
    this.selectedQuote = quote;
  }
}

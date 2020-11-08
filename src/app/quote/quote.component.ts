import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(
      1,
      'If life were predictable it would cease to be life, and be without flavor',
      'Eleanor Roosevelt',
      'Penguin Random House',
      new Date(2020, 11, 08),
      0,
      0
    ),
    new Quote(
      2,
      'My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style.',
      'Maya Angelou',
      'Macmillan Publishers',
      new Date(2020, 11, 08),
      0,
      0
    ),
    new Quote(
      3,
      'Life is like riding a bicycle. To keep your balance, you must keep moving.',
      'Albert Einstein',
      ' Simon & Schuster',
      new Date(2020, 11, 08),
      0,
      0
    ),
  ];

  addnewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.createdDate = new Date(quote.createdDate);
    this.quotes.push(quote);
  }

  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(
        `Are you sure You want to delete this quote owned by: "${this.quotes[index].author}"?`
      );

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  constructor() {}

  ngOnInit(): void {}
}

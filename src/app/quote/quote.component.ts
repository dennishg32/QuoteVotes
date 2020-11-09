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
      new Date(2010, 11, 14),
      0,
      0
    ),
    new Quote(
      2,
      'Life is like riding a bicycle. To keep your balance, you must keep moving.',
      'Albert Einstein',
      'Simon & Schuster',
      new Date(2019, 11, 22),
      0,
      0
    ),
  ];

  newQuote(quote) {
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

  myForm: boolean;
  formToggle() {
    this.myForm = !this.myForm;
  }

  sortQuotes() {
    this.quotes.sort((a, b) => (b.upvote > a.upvote ? 1 : -1));
  }
  highVote(index) {
    this.quotes[index].upvote + 1;
    this.sortQuotes();
  }
  constructor() {}

  ngOnInit(): void {}
}

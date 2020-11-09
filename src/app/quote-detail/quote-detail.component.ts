import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css'],
})
export class QuoteDetailComponent implements OnInit {
  @Input() quotes: Quote;
  @Output() isComplete = new EventEmitter<boolean>();
  @Output() check = new EventEmitter<number>();

  deleteQuote(complete: boolean) {
    this.isComplete.emit(complete);
  }

  downvotebtn() {
    this.quotes.downvote = this.quotes.downvote + 1;
  }

  upvotebtn() {
    this.quotes.upvote = this.quotes.upvote + 1;
    this.check.emit(this.quotes.upvote);
  }

  constructor() {}

  ngOnInit(): void {}
}

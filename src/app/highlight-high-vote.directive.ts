import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightHighVote]'
})
export class HighlightHighVoteDirective {

  constructor(private hvote: ElementRef) {
    hvote.nativeElement.style.color = 'orange';
  }

}

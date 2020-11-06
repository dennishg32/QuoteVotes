export class Quote {
  showDescription: boolean;
  constructor(
    public id: number,
    public quote: string,
    public author: string,
    public publisher: string,
    public createdDate: Date,
    public upvote: number,
    public downvote: number
  ) {
    this.showDescription = false;
  }
}

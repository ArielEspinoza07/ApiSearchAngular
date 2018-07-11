export class SearchVideo {

  constructor(search = '', quantity = 15) {
    this.search = search;
    this.quantity = quantity;
  }

  search: string;
  quantity: number;
}

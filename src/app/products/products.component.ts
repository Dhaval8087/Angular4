import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  pageTitle: string = 'Product List'
  imagewidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  products: any[] = [
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18,2017",
      "price": 32.20,
      "star": 4.2,
      "url": "https://openclipart.org/download/58471/garden-cart.svg"
    },
    {
      "productId": 3,
      "productName": "Hammer",
      "productCode": "TBX-0023",
      "releaseDate": "March 21,2017",
      "price": 8.9,
      "star": 4.8,
      "url": "https://openclipart.org/download/193438/freehammer.svg"
    }
  ];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}

import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
@Component({
  selector: 'pm-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() {
    this.filterProducts=this.products;
    this.listFilter='cart';
   }

  ngOnInit() {

  }
  pageTitle: string = 'Product List'
  imagewidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  _listFilter = '';
  currencyCode: string = '$';
  filterProducts: IProduct[];
  products: IProduct[] = [
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
  get listFilter() {
    return this._listFilter;
  }
  set listFilter(value) {
    this._listFilter = value;
    this.filterProducts = value ? this.performedFilter(value) : this.products;
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  performedFilter(value) {
    value = value.toLowerCase();
    return this.products.filter((product) => product.productName.toLocaleLowerCase().indexOf(value) !== -1);
  }
}

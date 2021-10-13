import { Component, OnInit } from '@angular/core';
import { IProduct } from "./product";

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');


@Component({
  selector: 'app-product-list',
  templateUrl: './productList.component.html',
  styleUrls: ['./productList.component.css']
})

export class ProductListComponent implements OnInit {
  

  products : IProduct[] = [
    {
      "productId": 5246,
      "productName": "Chou",
      "productCode": "PR-5420-L",
      "productDesc": "Lorem ipsum",
      "productPrice": 200,
      "productNote": 4.2,
      "productImage": "assets/images/chou.png",
    },
    {
      "productId": 5247,
      "productName": "Tomate",
      "productCode": "PR-5445-L",
      "productDesc": "Lorem ipsum",
      "productPrice": 300,
      "productNote": 4,
      "productImage": "assets/images/tomate.png",
    },
    {
      "productId": 5656,
      "productName": "Kiwi",
      "productCode": "PR-4558-F",
      "productDesc": "Lorem ipsum",
      "productPrice": 250,
      "productNote": 4,
      "productImage": "assets/images/kiwi.png",
    },
    {
      "productId": 5657,
      "productName": "Pasteque",
      "productCode": "PR-5545-F",
      "productDesc": "Lorem ipsum",
      "productPrice": 400,
      "productNote": 4.8,
      "productImage": "assets/images/pasteque.png",
    }
  ];

  imgWidth : number  = 80;
  imgHeight : number = 80;
  showImg : boolean = false;
  
  filteredProducts: any[] = [];

  private _textFilter : string = "";

  toggleImage(): void{
    this.showImg = !this.showImg;
  }

  get textFilter(): string{
    return this._textFilter;
  }

  set textFilter(value : string){
    this._textFilter = value;
    console.log(this._textFilter);
    this.filteredProducts = this.performFilter(value);
  }

  performFilter(filterBy : string) : any[]{
    filterBy = filterBy.toLowerCase();
    return this.products.filter((product) => product.productName.toLowerCase().includes(filterBy))
  }

  ngOnInit(): void{
    this.textFilter = ""
  }
}

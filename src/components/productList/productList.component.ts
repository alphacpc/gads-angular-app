import { Component, OnInit } from '@angular/core';
import { IProduct } from "./product";
import { ProductService } from './product.service';


import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');


@Component({
  selector: 'app-product-list',
  templateUrl: './productList.component.html',
  styleUrls: ['./productList.component.css'],
  providers: [ProductService]
})

export class ProductListComponent implements OnInit {
  
  constructor( private _productService : ProductService){}

  products : IProduct[] = []

  imgWidth : number  = 80;
  imgHeight : number = 80;
  showImg : boolean = false;
  
  filteredProducts: IProduct[] = [];

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
    this.products = this._productService.getProducts();
    this.filteredProducts = this.products;
  }
}

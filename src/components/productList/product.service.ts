import { Injectable } from "@angular/core";
import { IProduct } from "./product";

@Injectable({
    providedIn:'root'
})

export class ProductService{

    getProducts(): IProduct[] {
        return [
            {
              "productId": 5246,
              "productName": "Chou",
              "productCode": "PR-5420-L",
              "productCateg": "Legume",
              "productDesc": "Lorem ipsum",
              "productPrice": 200,
              "productNote": 4.2,
              "productImage": "assets/images/chou.png",
            },
            {
              "productId": 5247,
              "productName": "Tomate",
              "productCode": "PR-5445-L",
              "productCateg": "Legume",
              "productDesc": "Lorem ipsum",
              "productPrice": 300,
              "productNote": 4,
              "productImage": "assets/images/tomate.png",
            },
            {
              "productId": 5656,
              "productName": "Kiwi",
              "productCode": "PR-4558-F",
              "productCateg": "fruit",
              "productDesc": "Lorem ipsum",
              "productPrice": 250,
              "productNote": 4,
              "productImage": "assets/images/kiwi.png",
            },
            {
              "productId": 5657,
              "productName": "Pasteque",
              "productCode": "PR-5545-F",
              "productCateg": "fruit",
              "productDesc": "Lorem ipsum",
              "productPrice": 400,
              "productNote": 4.8,
              "productImage": "assets/images/pasteque.png",
            }
          ];
    }
}
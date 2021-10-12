import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GADS Angular App';

  products : any[] = [
    {
      "productId": "5246",
      "productName": "Chou",
      "productCode": "PR-5420-L",
      "productDesc": "Lorem ipsum",
      "productPrice": "200",
      "productNote": "4.2",
      "productImage": "assets/images/chou.png",
    },
    {
      "productId": "5247",
      "productName": "Tomate",
      "productCode": "PR-5445-L",
      "productDesc": "Lorem ipsum",
      "productPrice": "300",
      "productNote": "4",
      "productImage": "assets/images/tomate.png",
    },
    {
      "productId": "5656",
      "productName": "Kiwi",
      "productCode": "PR-4558-F",
      "productDesc": "Lorem ipsum",
      "productPrice": "250",
      "productNote": "4",
      "productImage": "assets/images/kiwi.png",
    },
    {
      "productId": "5657",
      "productName": "Pasteque",
      "productCode": "PR-5545-F",
      "productDesc": "Lorem ipsum",
      "productPrice": "400",
      "productNote": "4.8",
      "productImage": "assets/images/pasteque.png",
    }
  ];
  
  imgWidth : number  = 80;
  imgHeight : number = 80;
  showImg : boolean = false;
  textFilter : string = "";

  toggleImage(): void{
    this.showImg = !this.showImg;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GADS Angular App';

  products : any[] = [1,2,3,4,5,6];
  imgWidth : number  = 80;
  imgHeight : number = 80;
  showImg : boolean = false;


  toggleImage(): void{
    this.showImg = !this.showImg;
  }
}

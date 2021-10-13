import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import  { HeaderComponent } from '../components/header/header.component';
import { ProductListComponent } from 'src/components/productList/productList.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

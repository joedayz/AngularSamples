import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Item, Product} from '../models/product.interface';


@Injectable()
export class StockInventoryService{

  constructor(private http: HttpClient) {
  }


  getCartItems(): Observable<Item[]>{
    return this.http.get<Item[]>('http://localhost:3000/cart');
  }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:3000/products');
  }
}

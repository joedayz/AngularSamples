import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Item, Product} from '../models/product.interface';
import {catchError, map} from 'rxjs/operators';

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

  checkBranchId(id: string) : Observable<any> {
    const params = new HttpParams().set('id', id);

    return this.http.get('http://localhost:3000/branches', { params })
      .pipe(
        map( (response: Response) => response.json()),
        catchError((error: any) => Observable.throw(error.json()))
      );


  }
}

import { Injectable } from '@angular/core';
import { IProduct } from '../products/product.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private productURL = 'api/products/products.json'
  constructor(private http: HttpClient) { }

  getProducts():Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productURL);
  }
  getProduct(id: number): Observable<IProduct> {
    return this.getProducts().map(products=>products.find(p=>p.productId === id));
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public findAll(): Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:8080/products');
  }

  public findOne(): Observable<Product> {
    return this.http.get<Product>('http://localhost:8080/product/{id}');
  }

  public save(product: Product){
    return this.http.post<Product>('http://localhost:8080/product', product);
  }

}
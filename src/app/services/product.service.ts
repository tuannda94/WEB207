import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const apiUrl = 'http://localhost:3000/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  // subscribe
  getProducts(): Observable<any> {
    return this.http.get(apiUrl);
  }

  getProduct(id: number | string): Observable<any> {
    return this.http.get(`${apiUrl}/${id}`);
  }

  createProduct(data: any): Observable<any> {
    return this.http.post(apiUrl, data);
  }

  updateProduct(id: number | string, data: any): Observable<any> {
    return this.http.put(`${apiUrl}/${id}`, data);
  }

  deleteProduct(id: number|string) {
    return this.http.delete(`${apiUrl}/${id}`);
  }
}

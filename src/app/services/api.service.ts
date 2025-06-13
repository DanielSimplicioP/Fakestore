import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model'; // Importando a interface

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly apiUrl = 'https://fakestoreapi.com';

  constructor(private http: HttpClient) { }

  // Método com tipagem forte
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }

  // Método com tipagem forte
  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`);
  }

  // Novo: Método para buscar por categoria
  getProductsByCategory(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products/category/${category}`);
  }

  // Novo: Tratamento de erros genérico
  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    throw new Error('Something went wrong, please try again later.');
  }
}
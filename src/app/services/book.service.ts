import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:5000/api/books';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly baseUrl = 'http://localhost:5000/api';

  constructor(private readonly http: HttpClient) { }

  getOrderedBooksOverview(order: string) {
    const url = `${this.baseUrl}/books?order=${order}`;
    return this.http.get(url);
  }

  getBook(id: number) {
    const url = `${this.baseUrl}/books/${id}`;
    return this.http.get(url);
  }

  deleteBook(id: number, secret: string) {
    const url = `${this.baseUrl}/books/${id}?secret=${secret}`;
    return this.http.delete<void>(url);
  }

  postBook(book){
    const url = `${this.baseUrl}/books/save`;
    return this.http.post(url, book);
  }

  reviewBook(id: number, review) {
    const url = `${this.baseUrl}/books/${id}/review`;
    return this.http.put(url, review);
  }

  rateBook(id: number, rating){
    const url = `${this.baseUrl}/books/${id}/rate`;
    return this.http.put(url, rating);
  }

  getRecommendedBooks(genre: string){
    const url = `${this.baseUrl}/recommended?genre=${genre}`;
    return this.http.get(url);
  }
}
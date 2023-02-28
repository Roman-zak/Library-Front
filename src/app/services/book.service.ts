import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookOverview } from '../models/bookOverview.model';
import { BookDetalized } from '../models/bookDetalized.model';
import { BookSave } from '../models/bookSave.model';

const baseUrl = 'http://localhost:5000/api/books';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly baseUrl = 'https://localhost:5000/api';

  constructor(private readonly http: HttpClient) { }

  getOrderedBooksOverview(order: string): Observable<BookOverview[]> {
    const url = `${this.baseUrl}/books?order=${order}`;
    return this.http.get<BookOverview[]>(url);
  }

  getBook(id: number): Observable<BookDetalized> {
    const url = `${this.baseUrl}/books/${id}`;
    return this.http.get<BookDetalized>(url);
  }

  deleteBook(id: number, secret: string): Observable<any> {
    const url = `${this.baseUrl}/books/${id}?secret=${secret}`;
    return this.http.delete<void>(url);
  }

  postBook(book: BookSave): Observable<any>{
    const url = `${this.baseUrl}/books/save`;
    return this.http.post(url, book);
  }

  reviewBook(id: number, review) : Observable<any>{
    const url = `${this.baseUrl}/books/${id}/review`;
    return this.http.put(url, review);
  }

  rateBook(id: number, rating): Observable<any>{
    const url = `${this.baseUrl}/books/${id}/rate`;
    return this.http.put(url, rating);
  }

  getRecommendedBooks(genre: string): Observable<BookOverview[]>{
    const url = `${this.baseUrl}/recommended?genre=${genre}`;
    return this.http.get<BookOverview[]>(url);
  }
}
// import { Injectable } from '@angular/core';
// import { BookOverview } from '../models/bookOverview.model';
// import {BehaviorSubject} from 'rxjs'; 
// @Injectable({
//   providedIn: 'root'
// })
// export class BookEditService {
//   private _selectedBook: BehaviorSubject<BookOverview | undefined>;

//   get selectedBook():  BehaviorSubject<BookOverview | undefined> {
//     return this._selectedBook;
//   }

//   set selectedBook(book:  BehaviorSubject<BookOverview | undefined>) {
//     this._selectedBook = book;
//     console.log("service, selectedBook"+this._selectedBook+"is passed");
//   }
//   constructor(){
//     this._selectedBook=new BehaviorSubject<BookOverview | undefined>({});
//   }
// }
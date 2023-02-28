import { Component } from '@angular/core';
import { BookOverview } from 'app/models/bookOverview.model';
// import { BookEditService } from 'src/app/services/book-edit.service';
import { BookService } from 'app/services/book.service';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css']
})
export class BooksPageComponent {
  selectedBook: BookOverview | undefined;
 // constructor(private bookEditService: BookEditService) {}

  onEditBook(book: BookOverview) {
    console.log('onEditBook in bookPage entered');
    this.selectedBook = book;
  }
}

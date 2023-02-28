import { Component , OnInit } from '@angular/core';
import { BookOverview } from 'app/models/bookOverview.model';
import { BookService } from 'app/services/book.service';
import { BookListItemComponent } from '../book-list-item/book-list-item.component';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: any;
  selectedBook: BookOverview | undefined;

  constructor(private bookService: BookService) {

   }

    ngOnInit() {
    this.retrieveBooks();
  }

  retrieveBooks() {
    this.bookService.getOrderedBooksOverview("title")
      .subscribe(
        data => {
          this.books = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList() {
    this.retrieveBooks();
  }
  onEditBook(book: BookOverview) {
    this.selectedBook = book;
  }

}

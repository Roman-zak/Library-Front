import { Component , Input, OnInit } from '@angular/core';
import { BookOverview } from 'app/models/bookOverview.model';
import { BookService } from 'app/services/book.service';
import { BookListItemComponent } from '../book-list-item/book-list-item.component';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  @Input() recommendedMode?: string;
  @Input() ganre: string;
  books: any;
  selectedBook: BookOverview | undefined;

  constructor(private bookService: BookService) {
    this.ganre="Nonfiction";
   }

    ngOnInit() {
    this.retrieveBooks();
  }

  retrieveBooks() {
    if(this.recommendedMode=="recommended" ){
      this.bookService.getRecommendedBooks(this.ganre)
      .subscribe(
        data => {
          this.books = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
    } else if(this.recommendedMode=="all"){
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

  }

  refreshList() {
    this.retrieveBooks();
  }
  onEditBook(book: BookOverview) {
    this.selectedBook = book;
  }

}

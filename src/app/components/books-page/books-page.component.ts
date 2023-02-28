import { Component, Output } from '@angular/core';
import { BookOverview } from 'app/models/bookOverview.model';
import {MatTabsModule} from '@angular/material/tabs';
// import { BookEditService } from 'src/app/services/book-edit.service';
import { BookService } from 'app/services/book.service';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css']
})
export class BooksPageComponent {
  selectedBook: BookOverview | undefined;

}

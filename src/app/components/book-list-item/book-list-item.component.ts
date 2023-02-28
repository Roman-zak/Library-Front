import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookDetalized } from 'app/models/bookDetalized.model';
import { BookOverview } from 'app/models/bookOverview.model';
// import { BookEditService } from 'src/app/services/book-edit.service';
import { BookService } from 'app/services/book.service';
import { ViewBookComponent } from '../view-book/view-book.component';

@Component({
  selector: 'app-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.css']
})
export class BookListItemComponent {

    bookDetalized: BookDetalized;

    @ViewChild('dialogRef')
    dialogRef!: TemplateRef<any>;

    @Input() book?:BookOverview;
    @Output() editBookEvent = new EventEmitter<BookOverview>();
    constructor(private bookService: BookService, public dialog: MatDialog) {

      this.bookDetalized={};
    }
    
  ngOnInit() {
    this.getDetalized();
  }
  openModal() {
  }

  getDetalized() {
    if(this.book){
          this.bookService.getBook(this.book.id!)
      .subscribe(
        data => {
          this.bookDetalized = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
    }

  }

    editBook() {
      console.log("clicked, book"+this.book+"is passed");      
    }
    openCompDialog() {
      const myCompDialog = this.dialog.open(ViewBookComponent, { data: this.bookDetalized});
      myCompDialog.afterClosed().subscribe((res) => {
        console.log({ res });
      });
    }

}

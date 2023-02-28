import { Component, Input, SimpleChanges  } from '@angular/core';
import { BookOverview } from 'app/models/bookOverview.model';
import { BookSave } from 'app/models/bookSave.model';
// import { BookEditService } from 'src/app/services/book-edit.service';
import { BookService } from 'app/services/book.service';
//import {BehaviorSubject} from 'rxjs'; 
@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent {
   book! : BookSave;
  // @Input() set book(value: BookOverview | undefined){
  //   if (value) {
  //     this.editBook = {
  //       id: value.id,
  //       title: value.title,
  //       cover: '',
  //       content: '',
  //       genre: '',
  //       author: value.author
  //     };
  //   }
  // }
    // editBook! : BookSave;
    // editingMode!: boolean;
    // public get editBook() {
    //    this.bookEditService.selectedBook;
    //    return {
    //     id: this.bookEditService.selectedBook.subscribe(result =>  result?.id),
    //         title: this.bookEditService.selectedBook.subscribe(result =>  result?.title),
    //         cover: '',
    //         content: '',
    //         genre: '',
    //         author: this.bookEditService.selectedBook.subscribe(result =>  result?.author)
    //    }
    // }
    constructor(private bookService:BookService) {
      // console.log("edit book constructor entered");
      // this.bookEditService.selectedBook?.subscribe(book => {
      //   if (book) {
      //     console.log("edit book if (book) entered");

          this.book = {
            id: 0,
            title: '',
            cover: '',
            content: '',
            genre: '',
            author: ''
          };
      //   }
      // });
    }
    // constructor(private bookService:BookService){
    //   this.editBook = {
    //     id:0,
    //     title: "",
    //     cover: "",
    //     content: "",
    //     author: "",
    //     genre: ""
    //   }
    //   this.editingMode=false;
    // }
    // ngOnChanges(changes: SimpleChanges) {
    //   if (changes.book && changes.book.currentValue) {
    //     this.editBook = {
    //       id: changes.book.currentValue.id,
    //       title: changes.book.currentValue.title,
    //       cover: "changes.book.currentValue.cover",
    //       content: "changes.book.currentValue.content",
    //       author: changes.book.currentValue.author,
    //       genre: "changes.book.currentValue.genre"
    //     };
    //     this.editingMode = true;
    //   }
    // }
    clear(){
      this.book = {
        id: 0,
        title: '',
      //  cover: '',
      //  content: '',
        author: '',
      //  genre: ''
      };
    }
    save(){
      if(this.book){
        this.bookService.postBook(this.book).subscribe(response => {
          console.log(response.id);
        }, error => {
          console.log("loh!")      
        });
      }

    }
}

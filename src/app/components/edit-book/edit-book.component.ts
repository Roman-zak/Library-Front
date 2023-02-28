import { Component, Input, SimpleChanges  } from '@angular/core';
import { BookOverview } from 'app/models/bookOverview.model';
import { BookSave } from 'app/models/bookSave.model';
import { BookService } from 'app/services/book.service';
@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent {
   book! : BookSave;
  
    constructor(private bookService:BookService) {
          this.book = {
            id: 0,
            title: '',
            cover: '',
            content: '',
            genre: '',
            author: ''
          };
    }
  
    clear(){
      this.book = {
        id: 0,
        title: '',
        author: '',
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
    convertImage(event: any): void {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          if(reader.result){
            const base64Image = reader.result.toString().split(',')[1];

            this.book.cover = base64Image;
          }

        };
        reader.readAsDataURL(file);
      }
    }
}

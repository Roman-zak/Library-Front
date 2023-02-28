import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BooksPageComponent} from './components/books-page/books-page.component';
import {ViewBookComponent} from './components/view-book/view-book.component';
const routes: Routes = [
  { path: '', redirectTo: 'books-page', pathMatch: 'full' },
  { path: 'books-page', component: BooksPageComponent },
  { path: 'view-book/:id', component: ViewBookComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { ListItem } from '../../../shared/models/item';
import { SimpleService } from '../../../shared/services/simple.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  public books: ListItem[];
  constructor(public ss: SimpleService, public router: Router) { 
    
  }

  update(item: ListItem) {
    this.router.navigate(['/books/book-edit', item.id]);
  }

  ngOnInit() {
    this.books = this.ss.getAll();
  }

}

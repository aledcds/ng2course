import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchService } from './services/search.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [SearchService],
  declarations: [],
  exports: []
})
export class DoctorsModule { }

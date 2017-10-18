import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { DoctorInterface } from '../modules/doctors/models/interfaces';
import { SearchService } from '../modules/doctors/services/search.service';
import 'rxjs/add/operator/retry';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchField: FormControl;
  coolForm: FormGroup;
  result: DoctorInterface[];

  constructor(private searchService: SearchService, private fb: FormBuilder) {
    this.searchField = new FormControl();
    this.coolForm = fb.group({ search: this.searchField });

    this.searchField.valueChanges
      .debounceTime(400)
      .flatMap(term => this.searchService.search(term).retry(3))
      .map((term: any) => {
        return term.filter((item) => item.name.indexOf(this.searchField.value) !== -1)
      })
      .subscribe((result: DoctorInterface[]) => {
        this.result = result;
      }, (e) => {
        console.log(e);
      });
  }
}


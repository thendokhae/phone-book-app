import { Component, OnInit, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FileServiceService } from '../file-service.service';
import { PhoneBook } from '../models/phone-book';
import { Entry } from '../models/entry';

@Component({
  selector: 'app-phone-book-list',
  templateUrl: './phone-book-list.component.html',
  styleUrls: ['./phone-book-list.component.css']
})
export class PhoneBookListComponent implements OnInit {
  phoneBook: PhoneBook = new PhoneBook();
  filter = new FormControl('');
  entries$: Observable<Entry[]>;

  constructor(public fileService: FileServiceService) {
    this.phoneBook = fileService.getPhoneBook();
    this.entries$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => this.search(text))
    );
  }

  search(text: string): Entry[] {
    return this.phoneBook.entries.filter(entry => {
      const term = text.toLowerCase();
      return entry.name.toLowerCase().includes(term)
          || entry.phoneNumber.includes(term);
    });
  }

  ngOnInit() {
  }

}

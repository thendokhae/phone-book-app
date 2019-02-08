import { Injectable } from '@angular/core';
import { Entry } from '../app/models/entry';
import { PhoneBook } from '../app/models/phone-book';

@Injectable({
  providedIn: 'root'
})
export class FileServiceService {
  phoneBook: PhoneBook;
  constructor() {
    this.phoneBook = new PhoneBook();
    // this.getJSON().subscribe(data => {
    //     console.log(data);
    // });
}

  public getPhoneBook(): PhoneBook {
    if (JSON.parse(localStorage.getItem('phoneBook')) !== null) {
      this.phoneBook = JSON.parse(localStorage.getItem('phoneBook'));
    } else {
      const entry: Entry = new Entry();
      entry.name = 'Thendokhae Makahane';
      entry.phoneNumber = '27785891137';
      this.phoneBook.entries.push(entry);
      localStorage.setItem('phoneBook', JSON.stringify(this.phoneBook));
    }
    console.log('getPhoneBook', JSON.parse(localStorage.getItem('phoneBook')));
    return this.phoneBook;
  }

  public addEntry(entry: Entry) {
    this.phoneBook = JSON.parse(localStorage.getItem('phoneBook'));
    this.phoneBook.entries.push(entry);
    localStorage.setItem('phoneBook', JSON.stringify(this.phoneBook));
  }

}

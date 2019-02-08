import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entry } from '../models/entry';
import { FileServiceService } from '../file-service.service';


@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css']
})
export class AddEntryComponent implements OnInit {

  currentEntry: Entry =  new Entry();

  constructor(private router: Router, private fileService: FileServiceService) {
  }

  ngOnInit() {
  }

  addEntry() {
    this.fileService.addEntry(this.currentEntry);
    this.router.navigate(['/list-view']);
  }

}

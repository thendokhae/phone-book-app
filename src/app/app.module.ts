import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FileServiceService } from './file-service.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhoneBookListComponent } from './phone-book-list/phone-book-list.component';
import { AddEntryComponent } from './add-entry/add-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneBookListComponent,
    AddEntryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [FileServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

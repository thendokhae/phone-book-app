import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhoneBookListComponent } from './phone-book-list/phone-book-list.component';
import { PhoneBookViewComponent } from './phone-book-view/phone-book-view.component';
import { PhoneBookSearchComponent } from './phone-book-search/phone-book-search.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneBookListComponent,
    PhoneBookViewComponent,
    PhoneBookSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhoneBookListComponent } from '../app/phone-book-list/phone-book-list.component';
import { AddEntryComponent } from '../app/add-entry/add-entry.component';

const routes: Routes = [
  { path: 'list-view', component: PhoneBookListComponent },
  { path: 'add',      component: AddEntryComponent },
  { path: '',
    redirectTo: '/list-view',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

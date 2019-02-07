import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneBookSearchComponent } from './phone-book-search.component';

describe('PhoneBookSearchComponent', () => {
  let component: PhoneBookSearchComponent;
  let fixture: ComponentFixture<PhoneBookSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneBookSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneBookSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneBookViewComponent } from './phone-book-view.component';

describe('PhoneBookViewComponent', () => {
  let component: PhoneBookViewComponent;
  let fixture: ComponentFixture<PhoneBookViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneBookViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneBookViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

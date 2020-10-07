import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgYearCalendarComponent } from './ng-year-calendar.component';

describe('NgYearCalendarComponent', () => {
  let component: NgYearCalendarComponent;
  let fixture: ComponentFixture<NgYearCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgYearCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgYearCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

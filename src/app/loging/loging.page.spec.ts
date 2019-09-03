import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogingPage } from './loging.page';

describe('LogingPage', () => {
  let component: LogingPage;
  let fixture: ComponentFixture<LogingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

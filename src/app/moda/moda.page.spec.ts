import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaPage } from './moda.page';

describe('ModaPage', () => {
  let component: ModaPage;
  let fixture: ComponentFixture<ModaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

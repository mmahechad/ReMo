import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroesPage } from './superheroes.page';

describe('SuperheroesPage', () => {
  let component: SuperheroesPage;
  let fixture: ComponentFixture<SuperheroesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperheroesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperheroesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

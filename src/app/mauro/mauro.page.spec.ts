import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MauroPage } from './mauro.page';

describe('MauroPage', () => {
  let component: MauroPage;
  let fixture: ComponentFixture<MauroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MauroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MauroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

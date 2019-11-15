import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokedetailPage } from './jokedetail.page';

describe('JokedetailPage', () => {
  let component: JokedetailPage;
  let fixture: ComponentFixture<JokedetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokedetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokedetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

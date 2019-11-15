import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokelistComponent } from './jokelist.component';

describe('JokelistComponent', () => {
  let component: JokelistComponent;
  let fixture: ComponentFixture<JokelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokelistComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

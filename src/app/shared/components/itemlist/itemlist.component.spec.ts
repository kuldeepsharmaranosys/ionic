import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemlistComponent } from './itemlist.component';

describe('ItemlistComponent', () => {
  let component: ItemlistComponent;
  let fixture: ComponentFixture<ItemlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemlistComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

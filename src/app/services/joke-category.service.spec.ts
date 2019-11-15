import { TestBed } from '@angular/core/testing';

import { JokeCategoryService } from './joke-category.service';

describe('JokeCategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JokeCategoryService = TestBed.get(JokeCategoryService);
    expect(service).toBeTruthy();
  });
});

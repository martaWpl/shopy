import { TestBed } from '@angular/core/testing';

import { Store } from './store.service';

describe('StoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [Store]
  }));

  it('should be created', () => {
    const service: Store = TestBed.get(Store);
    expect(service).toBeTruthy();
  });
});

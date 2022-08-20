import { TestBed } from '@angular/core/testing';

import { ContactSaveService } from './contact-save-service.service';

describe('ContactSaveServiceService', () => {
  let service: ContactSaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactSaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

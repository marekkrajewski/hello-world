import { TestBed } from '@angular/core/testing';
import { getOurTeamPageMockProvider } from './pages.service.providers';

import { PagesService } from './pages.service';

describe('PagesService', () => {
  let service: PagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [getOurTeamPageMockProvider],
    });
    service = TestBed.inject(PagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

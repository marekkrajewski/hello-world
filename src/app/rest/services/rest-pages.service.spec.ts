import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RestPagesService } from './rest-pages.service';

describe('RestPagesService', () => {
  let service: RestPagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(RestPagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

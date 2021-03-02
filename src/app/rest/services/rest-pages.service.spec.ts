import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { RestPagesService, ApiGetResponse } from './rest-pages.service';
import { HttpClient } from '@angular/common/http';
import { OurTeamPageDto } from '../types/our-team-page-dto';
import {
  OurTeamPage,
  ourTeamPageMock,
} from '../../domain/_classes/our-team-page';

describe('RestPagesService', () => {
  let service: RestPagesService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RestPagesService],
    });

    service = TestBed.inject(RestPagesService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getOurTeamPage$', () => {
    const expectedResponse: ApiGetResponse<OurTeamPageDto[]> = {
      data: [ourTeamPageMock],
    };

    service.getOurTeamPage$().subscribe((response) => {
      expect(response instanceof OurTeamPage).toBeTrue();
    });

    const testRequest = httpTestingController.expectOne(
      'assets/rest-endpoints-mocks/our-team-page.json'
    );

    expect(testRequest.request.method).toEqual('GET');

    testRequest.flush(expectedResponse);
  });
});

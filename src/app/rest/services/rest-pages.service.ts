import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cacheable } from 'ts-cacheable';
import { OurTeamPage } from '../../domain/_classes/our-team-page';
import { OurTeamPageDto } from '../types/our-team-page-dto';
import { OnlyPublicProperties } from '../../ts-utilities/only-public-properties';
import {
  GetOurTeamPage,
  getOurTeamPageMock,
} from '../../domain/pages/get-our-team-page';

type ApiGetResponse<ResponsePayloadT> = {
  data: ResponsePayloadT;
};

@Injectable({
  providedIn: 'root',
})
export class RestPagesService implements GetOurTeamPage {
  constructor(
    //
    private httpClient: HttpClient
  ) {}

  @Cacheable()
  getOurTeamPage$(): Observable<OurTeamPage> {
    return this.httpClient
      .get<ApiGetResponse<OurTeamPageDto[]>>(
        'assets/rest-endpoints-mocks/our-team-page.json'
      )
      .pipe(map((response) => OurTeamPage.fromDto(response.data[0])));
  }
}

export const restPagesServiceMock: OnlyPublicProperties<RestPagesService> = {
  ...getOurTeamPageMock,
};

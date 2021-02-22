import { Provider } from '@angular/core';
import {
  RestPagesService,
  restPagesServiceMock,
} from 'src/app/rest/services/rest-pages.service';
import { GET_OUR_TEAM_PAGE_TOKEN } from './get-our-team-page';

export const getOurTeamPageProvider: Provider = {
  provide: GET_OUR_TEAM_PAGE_TOKEN,
  useClass: RestPagesService,
};

export const getOurTeamPageMockProvider: Provider = {
  provide: GET_OUR_TEAM_PAGE_TOKEN,
  useValue: restPagesServiceMock,
};

import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OnlyPublicProperties } from 'src/app/ts-utilities/only-public-properties';
import { OurTeamPage } from '../_classes/our-team-page';
import {
  GetOurTeamPage,
  getOurTeamPageMock,
  GET_OUR_TEAM_PAGE_TOKEN,
} from './get-our-team-page';

@Injectable({
  providedIn: 'root',
})
export class PagesService implements GetOurTeamPage {
  constructor(
    //
    @Inject(GET_OUR_TEAM_PAGE_TOKEN) private getOurTeamPage: GetOurTeamPage
  ) {}

  getOurTeamPage$(): Observable<OurTeamPage> {
    return this.getOurTeamPage.getOurTeamPage$();
  }
}

export const pagesServiceMock: OnlyPublicProperties<PagesService> = {
  ...getOurTeamPageMock,
};

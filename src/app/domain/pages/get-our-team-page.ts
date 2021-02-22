import { InjectionToken } from '@angular/core';
import { Observable, of } from 'rxjs';
import { OnlyPublicProperties } from 'src/app/ts-utilities/only-public-properties';
import { OurTeamPage, ourTeamPageMock } from '../_classes/our-team-page';

export interface GetOurTeamPage {
  getOurTeamPage$(): Observable<OurTeamPage>;
}

export const getOurTeamPageMock: OnlyPublicProperties<GetOurTeamPage> = {
  getOurTeamPage$: () => of(ourTeamPageMock),
};

export const GET_OUR_TEAM_PAGE_TOKEN = new InjectionToken<GetOurTeamPage>(
  'GetOurTeamPage'
);

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ourTeamPageMemberCardMock } from 'src/app/domain/_classes/our-team-page-member-card';

import { TeamMemberCardComponent } from './team-member-card.component';

describe('TeamMemberCardComponent', () => {
  let component: TeamMemberCardComponent;
  let fixture: ComponentFixture<TeamMemberCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamMemberCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamMemberCardComponent);
    component = fixture.componentInstance;

    component.teamMemberCard = ourTeamPageMemberCardMock as any;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

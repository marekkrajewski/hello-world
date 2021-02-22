import { ComponentFixture, TestBed } from '@angular/core/testing';
import { getOurTeamPageMockProvider } from 'src/app/domain/pages/pages.service.providers';

import { OurTeamContainerComponent } from './our-team-container.component';

describe('OurTeamContainerComponent', () => {
  let component: OurTeamContainerComponent;
  let fixture: ComponentFixture<OurTeamContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OurTeamContainerComponent],
      providers: [getOurTeamPageMockProvider],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurTeamContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

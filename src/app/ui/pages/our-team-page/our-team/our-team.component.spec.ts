import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurTeamComponent } from './our-team.component';
import { OurTeamModule } from './our-team.module';

describe('OurTeamComponent', () => {
  let component: OurTeamComponent;
  let fixture: ComponentFixture<OurTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OurTeamComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

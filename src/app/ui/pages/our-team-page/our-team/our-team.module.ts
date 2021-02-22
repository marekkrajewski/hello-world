import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurTeamComponent } from './our-team.component';
import { LoaderModule } from 'src/app/ui/_shared/loader/loader.module';
import { TeamMemberCardModule } from '../team-member-card/team-member-card.module';

@NgModule({
  declarations: [OurTeamComponent],
  exports: [OurTeamComponent],
  imports: [CommonModule, LoaderModule, TeamMemberCardModule],
})
export class OurTeamModule {}

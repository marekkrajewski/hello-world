import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurTeamContainerComponent } from './our-team-container.component';
import { OurTeamModule } from '../our-team/our-team.module';

@NgModule({
  declarations: [OurTeamContainerComponent],
  exports: [OurTeamContainerComponent],
  imports: [CommonModule, OurTeamModule],
})
export class OurTeamContainerModule {}

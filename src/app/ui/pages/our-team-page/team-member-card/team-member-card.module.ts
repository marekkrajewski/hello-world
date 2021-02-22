import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamMemberCardComponent } from './team-member-card.component';
import { ExternalLinkModule } from 'src/app/ui/_shared/external-link/external-link.module';

@NgModule({
  declarations: [TeamMemberCardComponent],
  exports: [TeamMemberCardComponent],
  imports: [CommonModule, ExternalLinkModule],
})
export class TeamMemberCardModule {}

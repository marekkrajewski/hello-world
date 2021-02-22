import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { OurTeamPageMemberCard } from 'src/app/domain/_classes/our-team-page-member-card';

@Component({
  selector: 'app-team-member-card',
  templateUrl: './team-member-card.component.html',
  styleUrls: ['./team-member-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamMemberCardComponent implements OnInit {
  @Input() teamMemberCard!: OurTeamPageMemberCard;

  constructor() {}

  ngOnInit(): void {}
}

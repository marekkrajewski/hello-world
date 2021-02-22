import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { OurTeamPage } from 'src/app/domain/_classes/our-team-page';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OurTeamComponent implements OnInit {
  @Input() ourTeamPage!: OurTeamPage | null;

  constructor() {}

  ngOnInit(): void {}
}

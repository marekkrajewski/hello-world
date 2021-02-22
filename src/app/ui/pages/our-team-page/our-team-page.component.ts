import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-team-page',
  templateUrl: './our-team-page.component.html',
  styleUrls: ['./our-team-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OurTeamPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

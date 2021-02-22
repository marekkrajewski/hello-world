import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PagesService } from 'src/app/domain/pages/pages.service';
import { OurTeamPage } from 'src/app/domain/_classes/our-team-page';

@Component({
  selector: 'app-our-team-container',
  templateUrl: './our-team-container.component.html',
  styleUrls: ['./our-team-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OurTeamContainerComponent implements OnInit {
  ourTeamPage$!: Observable<OurTeamPage>;

  constructor(
    //
    private pagesService: PagesService
  ) {}

  ngOnInit(): void {
    this.ourTeamPage$ = this.pagesService.getOurTeamPage$();
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurTeamContainerModule } from './our-team-container/our-team-container.module';
import { OurTeamPageComponent } from './our-team-page.component';

const routes: Routes = [
  {
    path: '',
    component: OurTeamPageComponent,
  },
];

@NgModule({
  declarations: [OurTeamPageComponent],
  imports: [
    //
    OurTeamContainerModule,
    RouterModule.forChild(routes),
  ],
})
export class OurTeamPageModule {}

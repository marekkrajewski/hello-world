import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { getOurTeamPageProvider } from './domain/pages/pages.service.providers';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'our-team',
  },
  {
    path: 'our-team',
    loadChildren: () =>
      import('./ui/pages/our-team-page/our-team-page.module').then(
        (module) => module.OurTeamPageModule
      ),
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    //
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [getOurTeamPageProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}

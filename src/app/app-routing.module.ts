import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '*',
    pathMatch: 'full',
    redirectTo: '',
  },
  {
    path: 'consultation',
    loadChildren: () =>
      import('./consultation/consultation.module').then(
        (consultation) => consultation.ConsultationModule
      ),
  },
  {
    path: 'rendez-vous',
    loadChildren: () =>
      import('./rendez-vous/rendez-vous.module').then(
        (rendezVous) => rendezVous.RendezVousModule
      ),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./contact/contact.module').then(
        (contact) => contact.ContactModule
      ),
  },
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      scrollPositionRestoration: 'disabled',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

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
        (c) => c.ConsultationModule
      ),
  },
  { path: 'hypothyroidie', loadChildren: () => import('./hypothyroidie/hypothyroidie.module').then(h => h.HypothyroidieModule) },
  {
    path: 'rendez-vous',
    loadChildren: () =>
      import('./rendez-vous/rendez-vous.module').then(
        (rv) => rv.RendezVousModule
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
  { path: 'hashimoto', loadChildren: () => import('./hashimoto/hashimoto.module').then(m => m.HashimotoModule) },
  { path: 'e-book', loadChildren: () => import('./e-book/e-book.module').then(m => m.EBookModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'disabled',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

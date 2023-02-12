import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {AccessibiliteComponent} from "./accessibilite/accessibilite.component";

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
    path: '',
    loadChildren: () =>
      import('./contact/contact.module').then(
        (contact) => contact.ContactModule
      ),
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'hashimoto', loadChildren: () => import('./hashimoto/hashimoto.module').then(m => m.HashimotoModule) },
  { path: 'e-book', loadChildren: () => import('./e-book/e-book.module').then(m => m.EBookModule) },
  { path: 'politique-de-confidentialite', loadChildren: () => import('./politique-de-confidentialite/politique-de-confidentialite.module').then(m => m.PolitiqueDeConfidentialiteModule) },
  { path: 'mentions-legales', loadChildren: () => import('./mentions-legales/mentions-legales.module').then(m => m.MentionsLegalesModule) },
  { path: 'accessibilite', component: AccessibiliteComponent },
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

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '*',
    pathMatch: 'full',
    redirectTo: '',
  },
  {
    path: 'a-propos',
    loadChildren: () =>
      import('./a-propos/a-propos.module').then(
        (a) => a.AProposModule
      ),
  },
  {
    path: 'hypothyroidie',
    loadChildren: () => import('./hypothyroidie/hypothyroidie.module').then(h => h.HypothyroidieModule)
  },
  {
    path: '',
    loadChildren: () =>
      import('./home/home.module').then(
        (home) => home.HomeModule
      ),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./contact/contact.module').then(
        (contact) => contact.ContactModule
      ),
  },
  {path: 'hashimoto', loadChildren: () => import('./hashimoto/hashimoto.module').then(m => m.HashimotoModule)},
  {path: 'e-book', loadChildren: () => import('./e-book/e-book.module').then(m => m.EBookModule)},
  {
    path: 'politique-de-confidentialite',
    loadChildren: () => import('./politique-de-confidentialite/politique-de-confidentialite.module').then(m => m.PolitiqueDeConfidentialiteModule)
  },
  {
    path: 'mentions-legales',
    loadChildren: () => import('./mentions-legales/mentions-legales.module').then(m => m.MentionsLegalesModule)
  },
  {path: 'accessibilite', loadComponent: () => import('./accessibilite/accessibilite.component').then(a => a.AccessibiliteComponent)},
];


import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'a-propos',
    data: {
      breadcrumb: 'À propos',
    },
    loadChildren: () =>
      import('./a-propos/a-propos.module').then(m => m.AProposModule),
  },
  {
    path: 'hypothyroidie',
    data: {
      breadcrumb: 'Hypothyroïdie',
    },
    loadChildren: () =>
      import('./hypothyroidie/hypothyroidie.module').then(m => m.HypothyroidieModule),
  },
  {
    path: 'hashimoto',
    data: {
      breadcrumb: 'Hashimoto',
    },
    loadChildren: () =>
      import('./hashimoto/hashimoto.module').then(m => m.HashimotoModule),
  },
  {
    path: 'contact',
    data: {
      breadcrumb: 'Contact',
    },
    loadChildren: () =>
      import('./contact/contact.module').then(m => m.ContactModule),
  },
  {
    path: 'tarifs',
    data: {
      breadcrumb: 'Tarifs',
    },
    loadComponent: () =>
      import('./tarifs/tarifs.component').then(m => m.TarifsComponent),
  },
  {
    path: 'e-books',
    data: {
      breadcrumb: 'E-books',
    },
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./e-books/e-books.component').then(m => m.EBooksComponent),
      },
      {
        path: 'prendre-soin-de-sa-thyroide',
        data: {
          breadcrumb: 'Prendre soin de sa thyroïde',
        },
        loadComponent: () =>
          import('./e-books/prendre-soin-de-sa-thyroide/prendre-soin-de-sa-thyroide.component')
            .then(m => m.PrendreSoinDeSaThyroideComponent),
      },
      {
        path: 'hashimoto-comment-dompter-la-maladie',
        data: {
          breadcrumb: 'Hashimoto : comment dompter la maladie',
        },
        loadComponent: () =>
          import('./e-books/comment-dompter-sa-maladie/comment-dompte-sa-maladie.component')
            .then(m => m.CommentDompteSaMaladieComponent),
      },
      {
        path: 'hashimoto-15-jours-de-menu-pour-chouchouter-ta-thyroide',
        data: {
          breadcrumb: '15 jours de menus',
        },
        loadComponent: () =>
          import('./e-books/e-book-menu/e-book-menu.component')
            .then(m => m.EBookMenuComponent),
      },
      {
        path: '50-recettes-fraicheur',
        data: {
          breadcrumb: '50 Recettes Fraîcheur',
        },
        loadComponent: () =>
          import('./e-books/recette-fraicheur/recette-fraicheur.component')
            .then(m => m.RecetteFraicheurComponent),
      },
    ],
  },
  {
    path: 'politique-de-confidentialite',
    data: {
      breadcrumb: 'Politique de confidentialité',
    },
    loadChildren: () =>
      import('./politique-de-confidentialite/politique-de-confidentialite.module')
        .then(m => m.PolitiqueDeConfidentialiteModule),
  },
  {
    path: 'mentions-legales',
    data: {
      breadcrumb: 'Mentions légales',
    },
    loadChildren: () =>
      import('./mentions-legales/mentions-legales.module')
        .then(m => m.MentionsLegalesModule),
  },
  {
    path: 'accessibilite',
    data: {
      breadcrumb: 'Accessibilité',
    },
    loadComponent: () =>
      import('./accessibilite/accessibilite.component')
        .then(m => m.AccessibiliteComponent),
  },
  {
    path: 'cabinets',
    children: [
      {
        path: 'blain',
        data: {
          breadcrumb: 'Blain',
        },
        loadComponent: () =>
          import('./blain/blain.component')
            .then(b => b.BlainComponent),
      },
      {
        path: 'nantes',
        data: {
          breadcrumb: 'Nantes',
        },
        loadComponent: () =>
          import('./nantes/nantes.component')
            .then(m => m.NantesComponent),
      },
      {
        path: 'visio',
        data: {
          breadcrumb: 'Visio',
        },
        loadComponent: () =>
          import('./visio/visio.component')
            .then(m => m.VisioComponent),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
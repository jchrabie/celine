import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {
  ActivatedRoute,
  NavigationEnd,
  PRIMARY_OUTLET,
  Router,
  RouterLink
} from '@angular/router';
import { filter } from 'rxjs/operators';

interface Breadcrumb {
  label: string;
  url: string;
}

@Component({
  selector: 'nav[app-breadcrumbs]',
  standalone: true,
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss',
  host: {
    'aria-label': 'Fil d’Ariane'
  },
  imports: [ MatIconModule, RouterLink] 
})
export class BreadcrumbsComponent {

  breadcrumbs: Breadcrumb[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.breadcrumbs = this.buildBreadcrumbs(this.route.root);
      });

    this.breadcrumbs = this.buildBreadcrumbs(this.route.root);
  }

  private buildBreadcrumbs(
    route: ActivatedRoute,
    url = '',
    breadcrumbs: Breadcrumb[] = []
  ): Breadcrumb[] {

    for (const child of route.children) {
      if (child.outlet !== PRIMARY_OUTLET) {
        continue;
      }

      const routeURL = child.snapshot.url
        .map(segment => segment.path)
        .join('/');

      const nextUrl = routeURL
        ? `${url}/${routeURL}`
        : url;

      const label = child.snapshot.data['breadcrumb'];

      if (label) {
        const alreadyExists = breadcrumbs.some(
          breadcrumb =>
            breadcrumb.label === label &&
            breadcrumb.url === nextUrl
        );

        if (!alreadyExists) {
          breadcrumbs.push({
            label,
            url: nextUrl
          });
        }
      }

      return this.buildBreadcrumbs(
        child,
        nextUrl,
        breadcrumbs
      );
    }

    return breadcrumbs;
  }
}
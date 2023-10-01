import { Component, OnInit, Inject } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs';
import { Header, Link } from './shared/models';
import { getHeaderByType, getLinks } from './shared/constants/header.constants';
import { Ville } from "./shared/models/ville";
import { TagService } from './shared/services/tag.service';
import { CommonModule, DOCUMENT } from '@angular/common';
import { FooterComponent, HeaderComponent } from './shared/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    RouterOutlet,
    CommonModule,
    FooterComponent,
    HeaderComponent,
  ],
  standalone: true,
})
export class AppComponent implements OnInit {
  links: Link[] = getLinks();

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private router: Router,
    private tagService: TagService,
    @Inject(DOCUMENT) private document: Document
  ) {
    const icons: string[] = [
      'facebook',
      'instagram',
      'immunology',
      'irido',
      'logo',
      'naturo',
      'pin',
      'phone',
      'reflexo',
      "thyroide",
      'webster',
    ];

    icons.forEach((icon) =>
      this.matIconRegistry.addSvgIcon(
        icon,
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          `assets/svg/${icon}.svg`
        )
      )
    );
  }

  ngOnInit() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.router)
      )
      .subscribe(() => {
        const urlArray = this.router.url.split('/')
          .map(url => url.replace(/\?.*/gi, ''));
        const path = urlArray[1];
        const ville = urlArray.length > 2 ? urlArray[urlArray.length - 1] : null;

        const header: Header = getHeaderByType(path, ville as Ville);

        this.tagService.setSocialMediaTags(
          this.router.url,
          header.title,
          header.description,
          header.imagePath
        );

        this.document?.getElementsByTagName('main')?.[0]
          .scroll?.({top: 0, behavior: 'smooth'});
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Header, Link } from './models';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { TagService } from './shared/services/tag.service';
import { getHeaderByType, getLinks } from './shared/constants/header.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  links: Link[] = getLinks();

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private router: Router,
    private tagService: TagService
  ) {
    const icons: string[] = [
      'facebook',
      'instagram',
      'irido',
      'jaune',
      'logo',
      'naturo',
      'pin',
      'phone',
      'reflexo',
      'vert',
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
        const urlArray = this.router.url.split('/');
        const finalUrl = urlArray[urlArray.length - 1].replace(/\?.*/gi, '');

        const header: Header = getHeaderByType(finalUrl);

        this.tagService.setSocialMediaTags(
          this.router.url,
          header.title,
          header.description,
          header.imagePath
        );

        document
          .getElementsByTagName('main')[0]
          .scroll({ top: 0, behavior: 'smooth' });
      });
  }
}

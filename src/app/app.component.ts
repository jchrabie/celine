import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { Header, Link } from './shared/models';
import { getHeaderByType, getLinks } from './shared/constants/header.constants';
import { TagService } from './shared/services/tag.service';
import { CommonModule } from '@angular/common';
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
    RouterModule
  ],
  standalone: true,
})
export class AppComponent {
  links: Link[] = getLinks();
  @ViewChild('main', { static: true })  main!: ElementRef<HTMLElement>;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private router: Router,
    private tagService: TagService,
  ) {
    const icons: string[] = [
      'facebook',
      'google',
      'resalib',
      'e-book',
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

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.main.nativeElement.scrollTo?.({
          top: 0,
          behavior: 'smooth'
        });

        const header: Header = getHeaderByType(this.router.url);

        this.tagService.setSeo(header);
      });
  }
}


import { CommonModule } from '@angular/common';
import {Component} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { BreadcrumbsComponent } from 'src/app/shared/components/breadcrumbs/breadcrumbs.component';
import { GalleryImage, ImageGalleryComponent } from 'src/app/shared/components/image-gallery/image-gallery.component';

type Image = { id: number, path: string, alt: string, thumb: string }

@Component({
  templateUrl: './e-book-menu.component.html',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    BreadcrumbsComponent,
    ImageGalleryComponent,
  ]
})
export class EBookMenuComponent  {
  readonly images: GalleryImage[] = [
  {
    id: '1',
    src: '/assets/e-book/ebook2-1.png',
    thumbnailSrc: '/assets/e-book/ebook2-thumb-1.png',
    alt: 'Couverture du e-book 15 jours de menus',
  },
  {
    id: '2',
    src: '/assets/e-book/ebook2-2.png',
    thumbnailSrc: '/assets/e-book/ebook2-thumb-2.png',
    alt: 'Sommaire du e-book',
  },
  {
    id: '3',
    src: '/assets/e-book/ebook2-3.png',
    thumbnailSrc: '/assets/e-book/ebook2-thumb-3.png',
    alt: 'Quelques clés avant de commencer',
  },
  {
    id: '4',
    src: '/assets/e-book/ebook2-4.png',
    thumbnailSrc: '/assets/e-book/ebook2-thumb-4.png',
    alt: 'Exemple de menu',
  },
  {
    id: '5',
    src: '/assets/e-book/ebook2-5.png',
    thumbnailSrc: '/assets/e-book/ebook2-thumb-5.png',
    alt: 'Exemple de liste de courses',
  },
  {
    id: '6',
    src: '/assets/e-book/ebook2-6.png',
    thumbnailSrc: '/assets/e-book/ebook2-thumb-6.png',
    alt: 'Recette : pain au sarrasin',
  },
];

selectedImage = this.images[0];
}

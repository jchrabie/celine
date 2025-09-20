import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';

import { BreadcrumbsComponent } from 'src/app/shared/components/breadcrumbs/breadcrumbs.component';
import {
  GalleryImage,
  ImageGalleryComponent,
} from 'src/app/shared/components/image-gallery/image-gallery.component';

@Component({
  standalone: true,
  templateUrl: './comment-dompte-sa-maladie.component.html',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    BreadcrumbsComponent,
    ImageGalleryComponent,
  ],
})
export class CommentDompteSaMaladieComponent {
  readonly images: GalleryImage[] = [
    {
      id: '1',
      src: '/assets/e-book/page-1.png',
      thumbnailSrc:
        '/assets/e-book/page-1-thumb.png',
      alt: 'Couverture du e-book',
    },
    {
      id: '2',
      src: '/assets/e-book/page-2.png',
      thumbnailSrc:
        '/assets/e-book/page-2-thumb.png',
      alt: 'Présentation des recettes simples et faciles à réaliser',
    },
    {
      id: '3',
      src: '/assets/e-book/page-3.png',
      thumbnailSrc:
        '/assets/e-book/page-3-thumb.png',
      alt: 'Sommaire',
    },
    {
      id: '4',
      src: '/assets/e-book/page-4.png',
      thumbnailSrc:
        '/assets/e-book/page-4-thumb.png',
      alt: 'Comment bien choisir ses sources de protéines',
    },
    {
      id: '5',
      src: '/assets/e-book/page-5.png',
      thumbnailSrc:
        '/assets/e-book/page-5-thumb.png',
      alt: 'Les indispensables',
    },
    {
      id: '6',
      src: '/assets/e-book/page-6.png',
      thumbnailSrc:
        '/assets/e-book/page-6-thumb.png',
      alt: 'Recette : glace façon Snickers',
    },
  ];

  selectedImage = this.images[0];
}
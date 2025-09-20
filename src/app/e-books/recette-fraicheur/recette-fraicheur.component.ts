import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { BreadcrumbsComponent } from "src/app/shared/components/breadcrumbs/breadcrumbs.component";
import {
  GalleryImage,
  ImageGalleryComponent,
} from 'src/app/shared/components/image-gallery/image-gallery.component';

type Image = { id: number, path: string, alt: string }

@Component({
  templateUrl: './recette-fraicheur.component.html',
  standalone: true,
  imports: [
    CommonModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    BreadcrumbsComponent,
    ImageGalleryComponent
]
})
export class RecetteFraicheurComponent  {
  readonly images: GalleryImage[] = [
    {
      id: '1',
      src: '/assets/e-book/50recettes/1.png',
      alt: 'Couverture du e-book 50 recettes fraîcheur',
    },
    {
      id: '2',
      src: '/assets/e-book/50recettes/2.png',
      alt: 'Sommaire du e-book',
    },
    {
      id: '3',
      src: '/assets/e-book/50recettes/3.png',
      alt: 'Recette Bowl au sarrasin',
    },
    {
      id: '4',
      src: '/assets/e-book/50recettes/4.png',
      alt: 'Recette Salade de chou chinois, carottes et sésame',
    },
    {
      id: '5',
      src: '/assets/e-book/50recettes/5.png',
      alt: 'Recette Eau fraîcheur antioxydante',
    },
  ];

  selectedImage = this.images[0];
}

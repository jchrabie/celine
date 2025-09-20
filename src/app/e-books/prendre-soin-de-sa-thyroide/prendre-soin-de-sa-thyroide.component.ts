import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';

import { ContactService } from '../../shared/services/contact.service';
import { BreadcrumbsComponent } from 'src/app/shared/components/breadcrumbs/breadcrumbs.component';
import {
  GalleryImage,
  ImageGalleryComponent,
} from 'src/app/shared/components/image-gallery/image-gallery.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  standalone: true,
  templateUrl: './prendre-soin-de-sa-thyroide.component.html',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSnackBarModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    BreadcrumbsComponent,
    ImageGalleryComponent,
  ],
})
export class PrendreSoinDeSaThyroideComponent {
  readonly images: GalleryImage[] = [
    {
      id: '1',
      src: '/assets/e-book/1.png',
      thumbnailSrc: '/assets/e-book/1-thumb.png',
      alt: 'Couverture du e-book',
    },
    {
      id: '2',
      src: '/assets/e-book/2.png',
      thumbnailSrc: '/assets/e-book/2-thumb.png',
      alt: 'Êtes-vous en hypothyroïdie ?',
    },
    {
      id: '3',
      src: '/assets/e-book/3.png',
      thumbnailSrc: '/assets/e-book/3-thumb.png',
      alt: "Focus sur l'iode",
    },
    {
      id: '4',
      src: '/assets/e-book/4.png',
      thumbnailSrc: '/assets/e-book/4-thumb.png',
      alt: 'Quelques recettes sucrées',
    },
  ];

  selectedImage = this.images[0];
  toggleBtn = false;

  readonly formData: FormGroup = this.builder.group({
    fullname: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    consent: new FormControl(false, Validators.requiredTrue),
    recaptcha: new FormControl(false, Validators.requiredTrue),
  });

  constructor(
    private readonly builder: FormBuilder,
    private readonly contactService: ContactService,
    private readonly snackBar: MatSnackBar,
  ) {}

  onSubmit(value: unknown): void {
    this.contactService
      .postMessage({
        ...value as object,
        comment: 'Je souhaite ton e-book !',
      })
      .then(() => {
        this.formData.reset();

        this.snackBar.open(
          'Votre e-book sera envoyé dans les plus brefs délais'
        );
      });
  }

  resolved(captchaResponse: boolean): void {
    this.formData.controls['recaptcha'].setValue(captchaResponse);
  }
}
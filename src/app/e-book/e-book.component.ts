import {Component} from '@angular/core';
import {ContactService} from "../shared/services/contact.service";
import {MatSnackBar} from "@angular/material/snack-bar";

type Image = { id: number, path: string, alt: string, thumb: string }

@Component({
  selector: 'app-e-book',
  templateUrl: './e-book.component.html',
  styleUrls: ['./e-book.component.scss']
})
export class EBookComponent  {
  images: Image[] = [
    {
      id: 0,
      path: '1.png',
      thumb: '1-thumb.png',
      alt: 'Page de garde du E-book',
    },
    {
      id: 1,
      path: '2.png',
      thumb: '2-thumb.png',
      alt: 'Page "est tu en hypothyroïdie ?"',
    },
    {
      id: 2,
      path: '3.png',
      thumb: '3-thumb.png',
      alt: `Page "focus sur l'iode"`,
    },
    {
      id: 3,
      path: '4.png',
      thumb: '4-thumb.png',
      alt: `Page "quelques recettes sucrées"`,
    },
  ];
  selectedImage = this.images[0];

  constructor(
    private contactService: ContactService,
    private matSnackBar: MatSnackBar,
  ) {
  }

  trackById = (index: number, item: Image) => item.id;

  

  resolved(captchaResponse: boolean) {
  }

}

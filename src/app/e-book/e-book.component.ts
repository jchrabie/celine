import {Component} from '@angular/core';

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
      path: 'page-1.png',
      thumb: 'page-1-thumb.png',
      alt: 'Page de garde du E-book',
    },
    {
      id: 1,
      path: 'page-2.png',
      thumb: 'page-2-thumb.png',
      alt: 'Page: des recettes simples et faciles à réaliser"',
    },
    {
      id: 2,
      path: 'page-3.png',
      thumb: 'page-3-thumb.png',
      alt: `Page "Sommaire"`,
    },
    {
      id: 3,
      path: 'page-4.png',
      thumb: 'page-4-thumb.png',
      alt: `Page "Comment bien choisir tes sources de protéines"`,
    },
    {
      id: 4,
      path: 'page-5.png',
      thumb: 'page-5-thumb.png',
      alt: `Page "les indispensables"`,
    },
    {
      id: 5,
      path: 'page-6.png',
      thumb: 'page-6-thumb.png',
      alt: `Page "glace façon snikers"`,
    },
  ];
  selectedImage = this.images[0];
  toggleBtn = false;

  trackById = (index: number, item: Image) => item.id;
}

import {Component} from '@angular/core';

type Image = { id: number, path: string, alt: string, thumb: string }

@Component({
  selector: 'app-e-book-menu',
  templateUrl: './e-book-menu.component.html',
  styleUrls: ['./e-book-menu.component.scss']
})
export class EBookMenuComponent  {
  images: Image[] = [
    {
      id: 0,
      path: 'ebook2-1.png',
      thumb: 'ebook2-thumb-1.png',
      alt: 'Page de garde du E-book',
    },
    {
      id: 1,
      path: 'ebook2-2.png',
      thumb: 'ebook2-thumb-2.png',
      alt: 'Page "Sommaire"',
    },
    {
      id: 2,
      path: 'ebook2-3.png',
      thumb: 'ebook2-thumb-3.png',
      alt: 'Page "Quelques clés avant de commencer"',
    },
    {
      id: 3,
      path: 'ebook2-4.png',
      thumb: 'ebook2-thumb-4.png',
      alt: `Page de menu`,
    },
    {
      id: 4,
      path: 'ebook2-5.png',
      thumb: 'ebook2-thumb-5.png',
      alt: `Page de liste de courses`,
    },
    {
      id: 5,
      path: 'ebook2-6.png',
      thumb: 'ebook2-thumb-6.png',
      alt: `Page de recette "Pain au sarrasin"`,
    },
  ];
  selectedImage = this.images[0];
  toggleBtn = false;

  trackById = (index: number, item: Image) => item.id;
}

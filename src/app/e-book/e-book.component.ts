import { Component } from '@angular/core';

type Image = {id: number, path: string, alt: string, thumb: string }

@Component({
  selector: 'app-e-book',
  templateUrl: './e-book.component.html',
  styleUrls: ['./e-book.component.scss']
})
export class EBookComponent {
  images: Image[] = [
    {
      id: 0,
      path: '1.png',
      thumb: '1-thumb.png',
      alt: 'Page de garde du E-book sur fond coloré',
    },
    {
      id: 1,
      path: '2.png',
      thumb: '2-thumb.png',
      alt: 'Page de garde du E-book',
    },
    {
      id: 2,
      path: '3.png',
      thumb: '3-thumb.png',
      alt: 'Contenu du E-book',
    },
  ];
  selectedImage = this.images[0];
  trackById = (index: number, item: Image) => item.id;
}

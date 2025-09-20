import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
  thumbnailSrc?: string;
}

@Component({
  selector: 'app-image-gallery',
  standalone: true,
  templateUrl: './image-gallery.component.html',
  styleUrl: './image-gallery.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageGalleryComponent {
  readonly images = input.required<GalleryImage[]>();

  readonly selectedImage = model.required<GalleryImage>();
}
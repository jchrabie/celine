import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LinkComponent } from '../link/link.component';

@Component({
  selector: 'app-mini-card',
  standalone: true,
  imports: [NgIf, RouterLink, LinkComponent],
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.scss'],
  host: {class: 'block h-full'}
})
export class MiniCardComponent {
  @Input() subtitle?: string;
  @Input() title!: string;
  @Input() link?: string;
  @Input() icon?: string | string[];
  @Input() imageSrc!: string | string[];

  isArray(icon: string | string[]): boolean {
    return Array.isArray(icon);
  }
}

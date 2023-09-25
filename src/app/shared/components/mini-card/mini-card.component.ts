import { NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LinkComponent } from '../link/link.component';

@Component({
  selector: 'app-mini-card',
  standalone: true,
  imports: [NgIf, RouterLink, LinkComponent, NgTemplateOutlet],
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.scss'],
  host: {class: 'block h-full'}
})
export class MiniCardComponent {
  @Input() title!: string
  @Input() link?: string
  @Input() icon!: string
}

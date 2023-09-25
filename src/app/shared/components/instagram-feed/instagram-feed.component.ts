import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SafePipe } from '../../pipes/safe.pipe';

@Component({
  selector: 'app-instagram-feed',
  standalone: true,
  imports: [CommonModule, SafePipe],
  template: `
  <iframe loading="lazy" title="Post instagram" [src]="'https://www.instagram.com/p/' + feed +'/embed/' | safe: 'resourceUrl'" width="300" height="400" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
`,
  host: {class: 'w-full, max-w-lg my-0 mx-auto flex justify-items-between'}
})
export class InstagramFeedComponent {
  @Input() feed!: string;
}


import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-temoignage',
  templateUrl: './temoignage.component.html',
  styleUrls: ['./temoignage.component.scss']
})
export class TemoignageComponent {
  @Input() name = '';
  @Input() stars = 0;

  get digram(): string {
    return this.name.split(' ').map(part => part.charAt(0)).join('')
  }

  get starsArray(): any[] {
    return Array(this.stars)
  }
}

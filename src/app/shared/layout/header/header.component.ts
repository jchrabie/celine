import { Component, Input } from '@angular/core';
import { Link } from '../../../models'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() links: Link[] = [];
}

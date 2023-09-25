import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Link } from '../../models';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [RouterLink]
})
export class FooterComponent {
  @Input() links: Link[] = [];
}

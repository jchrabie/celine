import { AfterContentChecked, Component, inject } from '@angular/core';
import { MiniCardComponent } from "../shared/components/mini-card/mini-card.component";
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { AbstractLayoutComponent, LayoutComponent } from '../shared/layout';
import { LayoutService } from '../shared/services/layout.service';

@Component({
  selector: 'app-e-books',
  standalone: true,
  imports: [MiniCardComponent, MatIconModule, RouterLink, LayoutComponent],
  templateUrl: './e-books.component.html',
  styleUrl: './e-books.component.scss'
})
export class EBooksComponent extends AbstractLayoutComponent implements AfterContentChecked {
  #layoutService = inject(LayoutService);
  
  ngAfterContentChecked() {
    this.#layoutService.updateConfig({
      title: 'Naturopathe certifiée<br/> Spécialisée dans les <strong>troubles de la thyroïde</strong>',
      backgroundImage: 'plage.webp',
      body: this.bodyLayout,
      subtitle: this.subtitleLayout,
    });
  }
}
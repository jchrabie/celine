import { AfterContentChecked, Component, inject } from '@angular/core';
import { AbstractLayoutComponent, LayoutComponent } from '../shared/layout';
import { LayoutService } from '../shared/services/layout.service';

@Component({
  templateUrl: './accessibilite.component.html',
  styleUrls: ['./accessibilite.component.scss'],
  imports: [LayoutComponent],
  standalone: true
})
export class AccessibiliteComponent extends AbstractLayoutComponent implements AfterContentChecked {
  #layoutService = inject(LayoutService);
  
  ngAfterContentChecked() {
    this.#layoutService.updateConfig({
      title: `Déclaration d'accessibilité`,
      backgroundImage: 'plage.webp',
      body: this.bodyLayout,
      subtitle: this.subtitleLayout,
    });
  }
}


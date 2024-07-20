import { AfterContentChecked, Component, inject } from '@angular/core';
import { AbstractLayoutComponent } from '../shared/layout';
import { LayoutService } from '../shared/services/layout.service';

@Component({
  selector: 'app-politique-de-confidentialite',
  templateUrl: './politique-de-confidentialite.component.html',
  styleUrls: ['./politique-de-confidentialite.component.scss']
})
export class PolitiqueDeConfidentialiteComponent extends AbstractLayoutComponent implements AfterContentChecked {
  #layoutService = inject(LayoutService);
  
  ngAfterContentChecked() {
    this.#layoutService.updateConfig({
      title: 'Politique de confidentialité',
      backgroundImage: 'plage.webp',
      body: this.bodyLayout,
      subtitle: this.subtitleLayout,
    });
  }
}

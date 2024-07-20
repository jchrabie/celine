import { AfterContentChecked, Component, inject } from '@angular/core';
import { LayoutService } from '../shared/services/layout.service';
import { AbstractLayoutComponent } from '../shared/layout';

@Component({
  selector: 'app-mentions-legales',
  templateUrl: './mentions-legales.component.html',
  styleUrls: ['./mentions-legales.component.scss']
})
export class MentionsLegalesComponent extends AbstractLayoutComponent implements AfterContentChecked {
  #layoutService = inject(LayoutService);
  
  ngAfterContentChecked() {
    this.#layoutService.updateConfig({
      title: 'Mentions légales',
      backgroundImage: 'plage.webp',
      body: this.bodyLayout,
      subtitle: this.subtitleLayout,
    });
  }
}

import { AfterContentChecked, AfterViewInit, Component, inject } from '@angular/core';
import { AbstractLayoutComponent } from "../shared/layout/abstract-layout.component";
import { LayoutService } from "../shared/services/layout.service";

@Component({
  templateUrl: './a-propos.component.html',
  styleUrls: ['./a-propos.component.scss'],
})
export class AProposComponent extends AbstractLayoutComponent implements AfterContentChecked {
  #layoutService = inject(LayoutService)

  ngAfterContentChecked() {
    this.#layoutService.updateConfig({
      title: 'A propos de moi',
      backgroundImage: 'plage.webp',
      body: this.bodyLayout,
      subtitle: this.subtitleLayout,
    });
  }
}

import { AfterContentChecked, Component, inject } from '@angular/core';
import { AbstractLayoutComponent } from "../shared/layout/abstract-layout.component";
import { LayoutService } from "../shared/services/layout.service";
import { LayoutComponent } from '../shared/layout';
import { MatIconModule } from '@angular/material/icon';

@Component({
  templateUrl: './blain.component.html',
  standalone: true,
  imports:[LayoutComponent, MatIconModule]
})
export class BlainComponent extends AbstractLayoutComponent implements AfterContentChecked {
  #layoutService = inject(LayoutService)

  ngAfterContentChecked() {
    this.#layoutService.updateConfig({
      title: 'Naturopathe à Blain',
      backgroundImage: 'plage.webp',
      body: this.bodyLayout,
      subtitle: this.subtitleLayout,
    });
  }
}

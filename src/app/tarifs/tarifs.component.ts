import { AfterContentChecked, Component, inject } from '@angular/core';
import { AbstractLayoutComponent } from '../shared/layout/abstract-layout.component';
import { LayoutService } from "../shared/services/layout.service";
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MiniCardComponent } from '../shared/components';
import { LayoutComponent } from '../shared/layout';

@Component({
  templateUrl: './tarifs.component.html',
  standalone: true,
  imports: [
    CommonModule,
    LayoutComponent,
    MatIconModule,
    MiniCardComponent
  ]
})
export class TarifsComponent extends AbstractLayoutComponent implements AfterContentChecked {
  #layoutService = inject(LayoutService);

  ngAfterContentChecked() {
    this.#layoutService.updateConfig({
      title: 'Tarifs',
      backgroundImage: 'plage.webp',
      body: this.bodyLayout,
      subtitle: this.subtitleLayout,
    });
  }
}

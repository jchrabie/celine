import { AfterContentChecked, AfterViewInit, Component, inject } from '@angular/core';
import { AbstractLayoutComponent } from '../shared/layout/abstract-layout.component';
import { LayoutService } from '../shared/services/layout.service';

@Component({
  selector: 'app-hypothyroidie',
  templateUrl: './hypothyroidie.component.html',
  styleUrls: ['./hypothyroidie.component.scss']
})
export class HypothyroidieComponent extends AbstractLayoutComponent implements AfterContentChecked {
  #layoutService = inject(LayoutService);
  
  ngAfterContentChecked() {
    this.#layoutService.updateConfig({
      title: 'Hypothyroïdie',
      backgroundImage: 'plage.webp',
      body: this.bodyLayout,
      subtitle: this.subtitleLayout,
    });
  }
}
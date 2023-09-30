import { AfterViewInit, Component, inject } from '@angular/core';
import { AbstractLayoutComponent } from '../shared/layout/abstract-layout.component';
import { LayoutService } from '../shared/services/layout.service';

@Component({
  selector: 'app-hypothyroidie',
  templateUrl: './hypothyroidie.component.html',
  styleUrls: ['./hypothyroidie.component.scss']
})
export class HypothyroidieComponent extends AbstractLayoutComponent implements AfterViewInit {
  #layoutService = inject(LayoutService);
  
  override ngAfterViewInit() {
    super.ngAfterViewInit();

    this.#layoutService.layoutConfiguration$.next({
      ...this.#layoutService.layoutConfiguration$.value,
      title: 'Hypothyroïdie',
      backgroundImage: 'plage.webp',
    });
  }
}
import { AfterViewInit, Component } from '@angular/core';
import { AbstractLayoutComponent } from '../shared/layout/abstract-layout.component';
import { LayoutService } from '../shared/services/layout.service';

@Component({
  templateUrl: './consultation.component.html',
})
export class ConsultationComponent extends AbstractLayoutComponent implements AfterViewInit {
  constructor(protected override layoutService: LayoutService) {
    super(layoutService);
  }

  override ngAfterViewInit() {
    super.ngAfterViewInit();

    this.layoutService.layoutConfiguration$.next({
      ...this.layoutService.layoutConfiguration$.value,
      title: 'Qui suis-je ?',
      backgroundImage: 'fond-nature.jpg',
    });
  }
}

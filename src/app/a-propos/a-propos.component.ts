import { AfterViewInit, Component, inject } from '@angular/core';
import { AbstractLayoutComponent } from "../shared/layout/abstract-layout.component";
import { LayoutService } from "../shared/services/layout.service";

@Component({
  templateUrl: './a-propos.component.html',
  styleUrls: ['./a-propos.component.scss'],
})
export class AProposComponent extends AbstractLayoutComponent implements AfterViewInit {
  #layoutService = inject(LayoutService)

  override ngAfterViewInit() {
    super.ngAfterViewInit();

    this.#layoutService.layoutConfiguration$.next({
      ...this.#layoutService.layoutConfiguration$.value,
      title: 'A propos de moi',
      backgroundImage: 'plage.webp',
    });
  }
}

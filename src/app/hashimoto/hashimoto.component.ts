import { AfterViewInit, Component, inject } from '@angular/core';
import { AbstractLayoutComponent } from '../shared/layout';
import { LayoutService } from '../shared/services/layout.service';

@Component({
  selector: 'app-hashimoto',
  templateUrl: './hashimoto.component.html',
  styleUrls: ['./hashimoto.component.scss']
})
export class HashimotoComponent extends AbstractLayoutComponent implements AfterViewInit {

  #layoutService = inject(LayoutService)

  override ngAfterViewInit() {
    super.ngAfterViewInit();

    this.#layoutService.layoutConfiguration$.next({
      ...this.#layoutService.layoutConfiguration$.value,
      title: 'La thyroïdite d\'Hashimoto',
      backgroundImage: 'plage.webp',
    });
  }

}

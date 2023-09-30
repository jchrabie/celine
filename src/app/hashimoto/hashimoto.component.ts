import { AfterViewInit, Component } from '@angular/core';
import { AbstractLayoutComponent } from '../shared/layout';
import { LayoutService } from '../shared/services/layout.service';

@Component({
  selector: 'app-hashimoto',
  templateUrl: './hashimoto.component.html',
  styleUrls: ['./hashimoto.component.scss']
})
export class HashimotoComponent 
  extends AbstractLayoutComponent
  implements AfterViewInit {
  constructor(protected override layoutService: LayoutService) {
    super(layoutService);
  }

  override ngAfterViewInit() {
    super.ngAfterViewInit();

    this.layoutService.layoutConfiguration$.next({
      ...this.layoutService.layoutConfiguration$.value,
      title: 'Hashimoto',
      backgroundImage: 'plage.webp',
    });
  }

}

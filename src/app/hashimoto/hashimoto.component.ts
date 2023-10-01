import { AfterContentChecked, AfterViewInit, Component, inject } from '@angular/core';
import { AbstractLayoutComponent } from '../shared/layout';
import { LayoutService } from '../shared/services/layout.service';

@Component({
  selector: 'app-hashimoto',
  templateUrl: './hashimoto.component.html',
  styleUrls: ['./hashimoto.component.scss']
})
export class HashimotoComponent extends AbstractLayoutComponent implements AfterContentChecked {

  #layoutService = inject(LayoutService)

  ngAfterContentChecked() {
    this.#layoutService.updateConfig({
      title: 'La thyroïdite d\'Hashimoto',
      backgroundImage: 'plage.webp',
      body: this.bodyLayout,
      subtitle: this.subtitleLayout,
    });
  }

}

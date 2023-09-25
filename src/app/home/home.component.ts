import {AfterViewInit, Component} from '@angular/core';
import {LayoutService} from '../shared/services/layout.service';
import {AbstractLayoutComponent} from '../shared/layout/abstract-layout.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent
  extends AbstractLayoutComponent
  implements AfterViewInit {

  constructor(protected override layoutService: LayoutService) {
    super(layoutService);
  }

  override ngAfterViewInit() {
    super.ngAfterViewInit();

    this.layoutService.layoutConfiguration$.next({
      ...this.layoutService.layoutConfiguration$.value,
      title: 'Votre Naturopathe spécialisée dans la maladie d\'Hashimoto et l\'hypothyroïdie',
      backgroundImage: 'plage.webp',
    });
  }
}

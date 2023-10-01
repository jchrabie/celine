import {AfterViewInit, Component, inject} from '@angular/core';
import {LayoutService} from '../shared/services/layout.service';
import {AbstractLayoutComponent} from '../shared/layout/abstract-layout.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends AbstractLayoutComponent implements AfterViewInit {
  #layoutService = inject(LayoutService);
  
  override ngAfterViewInit() {
    super.ngAfterViewInit();

    this.#layoutService.layoutConfiguration$.next({
      ...this.#layoutService.layoutConfiguration$.value,
      title: '<span class="text-2xl sm:text-4xl">Céline Chrabie</span> <br/> <br/> Naturopathe certifiée<br/> Spécialisée dans les <strong>troubles de la thyroïde</strong>',
      backgroundImage: 'plage.webp',
    });
  }
}

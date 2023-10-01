import {AfterContentChecked, AfterViewInit, Component, inject} from '@angular/core';
import {LayoutService} from '../shared/services/layout.service';
import {AbstractLayoutComponent} from '../shared/layout/abstract-layout.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends AbstractLayoutComponent implements AfterContentChecked {
  #layoutService = inject(LayoutService);
  
  ngAfterContentChecked() {
    this.#layoutService.updateConfig({
      title: '<span class="text-2xl sm:text-4xl">Céline Chrabie</span> <br/> <br/> Naturopathe certifiée<br/> Spécialisée dans les <strong>troubles de la thyroïde</strong>',
      backgroundImage: 'plage.webp',
      body: this.bodyLayout,
      subtitle: this.subtitleLayout,
    });
  }
}

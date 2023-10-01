import { DOCUMENT } from "@angular/common";
import { AfterViewInit, Component, Inject, inject } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { AbstractLayoutComponent } from '../shared/layout/abstract-layout.component';
import { LayoutService } from '../shared/services/layout.service';

@Component({
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.scss'],
})
export class RendezVousComponent  extends AbstractLayoutComponent implements AfterViewInit {
  #layoutService = inject(LayoutService);
  #activatedRoute = inject(ActivatedRoute);
  
  reflexoToggle = false;
  naturoToggle = false;
  decouverteToggle = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
  ) {
    super();
  }

  ngAfterViewInit() {
    this.#activatedRoute.fragment
      .subscribe(fragment => {
        const element = this.document.querySelector("#" + fragment)
        if (element) element.scrollIntoView()
      })

    this.#layoutService.updateConfig({
      title: 'Qui suis-je ?',
      backgroundImage: 'fond-nature.jpg',
      body: this.bodyLayout,
      subtitle: this.subtitleLayout,
    });
  }
}

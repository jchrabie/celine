import { DOCUMENT } from "@angular/common";
import { AfterViewInit, Component, Inject } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { AbstractLayoutComponent } from '../shared/layout/abstract-layout.component';
import { LayoutService } from '../shared/services/layout.service';

@Component({
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.scss'],
})
export class RendezVousComponent extends AbstractLayoutComponent implements AfterViewInit {
  reflexoToggle = false;
  naturoToggle = false;
  decouverteToggle = false;

  constructor(
    protected override layoutService: LayoutService,
    @Inject(DOCUMENT) private document: Document,
    private activatedRoute: ActivatedRoute,
  ) {
    super(layoutService);
  }

  override ngAfterViewInit() {
    super.ngAfterViewInit();

    this.activatedRoute.fragment
      .subscribe(fragment => {
        const element = this.document.querySelector("#" + fragment)
        if (element) element.scrollIntoView()
      })

    this.layoutService.layoutConfiguration$.next({
      ...this.layoutService.layoutConfiguration$.value,
      title: 'Qui suis-je ?',
      backgroundImage: 'fond-nature.jpg',
    });
  }
}

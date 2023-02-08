import { AfterViewInit, Component } from '@angular/core';
import { AbstractLayoutComponent } from '../shared/layout/abstract-layout.component';
import { LayoutService } from '../shared/services/layout.service';
import {ViewportScroller} from "@angular/common";
import {ActivatedRoute} from "@angular/router";

@Component({
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.scss'],
})
export class RendezVousComponent extends AbstractLayoutComponent implements AfterViewInit {
  reflexoCalendar = false;
  naturoCalendar = false;
  decouverteCalendar = false;

  constructor(
    protected override layoutService: LayoutService,
    private viewportScroller: ViewportScroller,
    private activatedRoute: ActivatedRoute,
  ) {
    super(layoutService);
  }

  override ngAfterViewInit() {
    super.ngAfterViewInit();

    this.activatedRoute.fragment
      .subscribe(fragment => {
        const element = document.querySelector("#" + fragment)
        if (element) element.scrollIntoView()
      })

    this.layoutService.layoutConfiguration$.next({
      ...this.layoutService.layoutConfiguration$.value,
      title: 'Qui suis-je ?',
      backgroundImage: 'fond-nature.jpg',
    });
  }
}

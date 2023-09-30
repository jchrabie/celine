import {
  AfterViewInit,
  Component,
  TemplateRef,
  ViewChild,
  inject,
} from '@angular/core';
import { LayoutService } from '../services/layout.service';

@Component({
  template: '',
})
export class AbstractLayoutComponent implements AfterViewInit {
  @ViewChild('subtitleLayout') subtitleLayout: TemplateRef<unknown> | undefined;
  @ViewChild('bodyLayout') bodyLayout: TemplateRef<unknown> | undefined;

  #layoutService = inject(LayoutService)

  ngAfterViewInit() {
    this.#layoutService.layoutConfiguration$.next({
      ...this.#layoutService.layoutConfiguration$.value,
      body: this.bodyLayout,
      subtitle: this.subtitleLayout,
    });
  }
}

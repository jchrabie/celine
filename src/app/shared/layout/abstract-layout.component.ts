import {
  Component,
  TemplateRef,
  ViewChild,
} from '@angular/core';

@Component({
  template: '',
})
export class AbstractLayoutComponent {
  @ViewChild('subtitleLayout') subtitleLayout: TemplateRef<unknown> | undefined;
  @ViewChild('bodyLayout') bodyLayout: TemplateRef<unknown> | undefined;
}

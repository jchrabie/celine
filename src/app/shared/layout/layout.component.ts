import { Component } from '@angular/core';
import { LayoutConfiguration, LayoutService } from '../services/layout.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  layoutConfiguration$: Subject<LayoutConfiguration> =
    this.layoutService.layoutConfiguration$;

  constructor(private layoutService: LayoutService) {}
}

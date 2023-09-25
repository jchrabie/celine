import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { LayoutConfiguration, LayoutService } from '../services/layout.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  standalone: true,
  imports: [AsyncPipe, NgIf]
})
export class LayoutComponent {
  layoutConfiguration$: Subject<LayoutConfiguration> =
    this.layoutService.layoutConfiguration$;

  constructor(private layoutService: LayoutService) {}
}

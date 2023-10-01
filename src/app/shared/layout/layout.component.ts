import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { LayoutConfiguration, LayoutService } from '../services/layout.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  standalone: true,
  imports: [AsyncPipe, NgIf],
})
export class LayoutComponent {
  private layoutService = inject(LayoutService);
  private cdr = inject(ChangeDetectorRef);

  layoutConfiguration$: Observable<LayoutConfiguration> = this.layoutService.layoutConfiguration$;
}

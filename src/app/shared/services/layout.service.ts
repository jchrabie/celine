import { Injectable, TemplateRef } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface LayoutConfiguration {
  backgroundImage: string;
  title: string;
  subtitle?: TemplateRef<unknown>;
  body?: TemplateRef<unknown>;
}

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private layoutConfiguration$$ = new BehaviorSubject<LayoutConfiguration>({} as LayoutConfiguration);

  layoutConfiguration$: Observable<LayoutConfiguration> = this.layoutConfiguration$$.asObservable();

  public updateConfig(config: Partial<LayoutConfiguration>): void {
    this.layoutConfiguration$$.next({
      ...this.layoutConfiguration$$.value,
      ...config
    });
  }
}

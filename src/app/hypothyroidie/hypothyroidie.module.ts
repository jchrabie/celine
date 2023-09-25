import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LayoutComponent } from '../shared/layout/layout.component';
import { HypothyroidieRoutingModule } from './hypothyroidie-routing.module';
import { HypothyroidieComponent } from './hypothyroidie.component';
import { InstagramFeedComponent } from '../shared/components';


@NgModule({
  declarations: [
    HypothyroidieComponent
  ],
  imports: [
    CommonModule,
    HypothyroidieRoutingModule,
    LayoutComponent,
    InstagramFeedComponent,
    RouterLink
  ]
})
export class HypothyroidieModule { }

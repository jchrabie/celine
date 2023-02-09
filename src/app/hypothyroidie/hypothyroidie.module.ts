import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HypothyroidieRoutingModule } from './hypothyroidie-routing.module';
import { HypothyroidieComponent } from './hypothyroidie.component';


@NgModule({
  declarations: [
    HypothyroidieComponent
  ],
  imports: [
    CommonModule,
    HypothyroidieRoutingModule
  ]
})
export class HypothyroidieModule { }

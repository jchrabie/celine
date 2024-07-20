import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MentionsLegalesRoutingModule } from './mentions-legales-routing.module';
import { MentionsLegalesComponent } from './mentions-legales.component';
import { LayoutComponent } from '../shared/layout';


@NgModule({
  declarations: [
    MentionsLegalesComponent
  ],
  imports: [
    CommonModule,
    MentionsLegalesRoutingModule,
    LayoutComponent
  ]
})
export class MentionsLegalesModule { }

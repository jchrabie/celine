import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MentionsLegalesRoutingModule } from './mentions-legales-routing.module';
import { MentionsLegalesComponent } from './mentions-legales.component';


@NgModule({
  declarations: [
    MentionsLegalesComponent
  ],
  imports: [
    CommonModule,
    MentionsLegalesRoutingModule
  ]
})
export class MentionsLegalesModule { }

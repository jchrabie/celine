import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PolitiqueDeConfidentialiteRoutingModule } from './politique-de-confidentialite-routing.module';
import { PolitiqueDeConfidentialiteComponent } from './politique-de-confidentialite.component';


@NgModule({
  declarations: [
    PolitiqueDeConfidentialiteComponent
  ],
  imports: [
    CommonModule,
    PolitiqueDeConfidentialiteRoutingModule
  ]
})
export class PolitiqueDeConfidentialiteModule { }

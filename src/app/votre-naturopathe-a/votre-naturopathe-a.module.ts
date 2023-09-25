import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DeroulementComponent } from '../shared/components/deroulement/deroulement.component';
import { VotreNaturopatheARoutingModule } from './votre-naturopathe-a-routing.module';
import { VotreNaturopatheAComponent } from './votre-naturopathe-a.component';


@NgModule({
  declarations: [
    VotreNaturopatheAComponent
  ],
  imports: [
    CommonModule,
    DeroulementComponent,
    VotreNaturopatheARoutingModule,
  ]
})
export class VotreNaturopatheAModule {
}

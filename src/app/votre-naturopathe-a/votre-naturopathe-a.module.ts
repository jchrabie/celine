import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {VotreNaturopatheARoutingModule} from './votre-naturopathe-a-routing.module';
import {VotreNaturopatheAComponent} from './votre-naturopathe-a.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    VotreNaturopatheAComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    VotreNaturopatheARoutingModule,
  ]
})
export class VotreNaturopatheAModule {
}

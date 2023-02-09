import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HashimotoRoutingModule } from './hashimoto-routing.module';
import { HashimotoComponent } from './hashimoto.component';


@NgModule({
  declarations: [
    HashimotoComponent
  ],
  imports: [
    CommonModule,
    HashimotoRoutingModule
  ]
})
export class HashimotoModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { InstagramFeedComponent } from '../shared/components';
import { LayoutComponent } from '../shared/layout';
import { HashimotoRoutingModule } from './hashimoto-routing.module';
import { HashimotoComponent } from './hashimoto.component';


@NgModule({
  declarations: [
    HashimotoComponent
  ],
  imports: [
    CommonModule,
    HashimotoRoutingModule,
    InstagramFeedComponent,
    LayoutComponent,
    MatIconModule
  ]
})
export class HashimotoModule { }

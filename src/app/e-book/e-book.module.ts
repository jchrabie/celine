import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EBookRoutingModule } from './e-book-routing.module';
import { EBookComponent } from './e-book.component';
import {MatIconModule} from "@angular/material/icon";
import {MatExpansionModule} from "@angular/material/expansion";


@NgModule({
  declarations: [
    EBookComponent
  ],
  imports: [
    CommonModule,
    EBookRoutingModule,
    MatIconModule,
    MatExpansionModule
  ]
})
export class EBookModule { }

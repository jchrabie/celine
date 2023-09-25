import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { LinkComponent } from "../shared/components";
import { MiniCardComponent } from "../shared/components/mini-card/mini-card.component";
import { LayoutComponent } from "../shared/layout";
import { AProposRoutingModule } from './a-propos-routing.module';
import { AProposComponent } from './a-propos.component';

@NgModule({
  declarations: [AProposComponent],
  imports: [CommonModule, AProposRoutingModule, MatIconModule, LinkComponent, LayoutComponent, MiniCardComponent],
})
export class AProposModule {
}

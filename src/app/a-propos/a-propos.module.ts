import {NgModule} from '@angular/core';
import {AProposComponent} from './a-propos.component';
import {AProposRoutingModule} from './a-propos-routing.module';
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [AProposComponent],
  imports: [CommonModule, AProposRoutingModule, SharedModule],
  providers: [],
})
export class AProposModule {
}

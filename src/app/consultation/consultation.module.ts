import { NgModule } from '@angular/core';
import { ConsultationComponent } from './consultation.component';
import { ConsultationRoutingModule } from './consultation-routing.module';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [ConsultationComponent],
  imports: [CommonModule, ConsultationRoutingModule],
  providers: [],
})
export class ConsultationModule {}

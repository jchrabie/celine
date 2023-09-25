import { NgModule } from '@angular/core';
import { RendezVousComponent } from './rendez-vous.component';
import { RendezVousRoutingModule } from './rendez-vous-routing.module';
import {CalendarComponent} from "../shared/components";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [RendezVousComponent, ],
  imports: [CalendarComponent, CommonModule, RendezVousRoutingModule],
})
export class RendezVousModule {}

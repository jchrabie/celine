import { NgModule } from '@angular/core';
import { RendezVousComponent } from './rendez-vous.component';
import { RendezVousRoutingModule } from './rendez-vous-routing.module';
import {CalendarComponent} from "../shared/components/calendar/calendar.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [RendezVousComponent, CalendarComponent],
  imports: [CommonModule, RendezVousRoutingModule],
  providers: [],
})
export class RendezVousModule {}

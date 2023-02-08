import { NgModule } from '@angular/core';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [ContactComponent],
  imports: [ContactRoutingModule, MatIconModule],
  providers: [],
})
export class ContactModule {}

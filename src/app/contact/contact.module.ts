import { NgModule } from '@angular/core';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { MatIconModule } from "@angular/material/icon";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, ContactRoutingModule, MatIconModule, ReactiveFormsModule],
  providers: [],
})
export class ContactModule { }

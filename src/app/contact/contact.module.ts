import {NgModule} from '@angular/core';
import {ContactComponent} from './contact.component';
import {ContactRoutingModule} from './contact-routing.module';
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from '@angular/common';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {RecaptchaFormsModule, RecaptchaModule} from "ng-recaptcha";

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    FormsModule,
    MatIconModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
  ],
  exports: [ContactComponent],
})
export class ContactModule {
}

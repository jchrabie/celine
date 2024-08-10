import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EBookMenuRoutingModule} from './e-book-menu-routing.module';
import {EBookMenuComponent} from './e-book-menu.component';
import {MatIconModule} from "@angular/material/icon";
import {RecaptchaFormsModule, RecaptchaModule} from "ng-recaptcha";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSnackBarModule} from "@angular/material/snack-bar";


@NgModule({
  declarations: [
    EBookMenuComponent
  ],
  imports: [
    CommonModule,
    EBookMenuRoutingModule,
    MatIconModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
  ]
})
export class EBookMenuModule {
}

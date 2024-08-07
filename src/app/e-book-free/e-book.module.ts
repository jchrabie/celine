import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EBookRoutingModule} from './e-book-routing.module';
import {EBookComponent} from './e-book.component';
import {MatIconModule} from "@angular/material/icon";
import {RecaptchaFormsModule, RecaptchaModule} from "ng-recaptcha";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { LinkComponent } from "../shared/components/link/link.component";


@NgModule({
  declarations: [
    EBookComponent
  ],
  imports: [
    CommonModule,
    EBookRoutingModule,
    MatIconModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    LinkComponent
]
})
export class EBookModule {
}

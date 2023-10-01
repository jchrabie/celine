import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { RecaptchaFormsModule, RecaptchaModule } from "ng-recaptcha";
import { MiniCardComponent } from "../shared/components/mini-card/mini-card.component";
import { LayoutComponent } from '../shared/layout';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';

@NgModule({
    declarations: [ContactComponent],
    exports: [ContactComponent],
    imports: [
        CommonModule,
        ContactRoutingModule,
        FormsModule,
        LayoutComponent,
        MatIconModule,
        MatSnackBarModule,
        ReactiveFormsModule,
        RecaptchaModule,
        RecaptchaFormsModule,
        MiniCardComponent
    ]
})
export class ContactModule {
}

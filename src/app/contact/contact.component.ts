import { Component } from '@angular/core';
import { AbstractLayoutComponent } from '../shared/layout/abstract-layout.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LayoutService } from "../shared/services/layout.service";
import { ContactService } from '../shared/services/contact.service';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent extends AbstractLayoutComponent {
  formData: FormGroup = this.builder.group({
    fullName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl(''),
    comment: new FormControl('', [Validators.required]),
    consent: new FormControl(false, [Validators.requiredTrue]),
    recaptcha: new FormControl(false, [Validators.requiredTrue])
  });

  constructor(
    private builder: FormBuilder,
    protected override layoutService: LayoutService,
    private contact: ContactService,
    private matSnackBar: MatSnackBar

  ) {
    super(layoutService);
  }

  onSubmit(value: any) {
    this.contact.postMessage(value)
      .subscribe(response => {
        this.formData.reset();
        this.matSnackBar.open('Votre message à bien été envoyé')
      }, error => {
        console.warn(error.responseText)
        console.log({ error })
      })
  }

  resolved(captchaResponse: boolean) {
    this.formData.controls['recaptcha'].setValue(captchaResponse);
  }
}

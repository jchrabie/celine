import { AfterViewInit, Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from "@angular/material/snack-bar";
import { first } from 'rxjs';
import { AbstractLayoutComponent } from '../shared/layout/abstract-layout.component';
import { ContactService } from '../shared/services/contact.service';
import { LayoutService } from "../shared/services/layout.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent extends AbstractLayoutComponent implements AfterViewInit {
  #builder = inject(FormBuilder);
  #contact = inject(ContactService);
  #layoutService = inject(LayoutService);
  #matSnackBar = inject(MatSnackBar);

  formData: FormGroup = this.#builder.group({
    fullName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl(''),
    comment: new FormControl('', [Validators.required]),
    consent: new FormControl(false, [Validators.requiredTrue]),
    recaptcha: new FormControl(false, [Validators.requiredTrue])
  });

  override ngAfterViewInit() {
    super.ngAfterViewInit();

    this.#layoutService.layoutConfiguration$.next({
      ...this.#layoutService.layoutConfiguration$.value,
      title: 'Contact',
      backgroundImage: 'plage.webp',
    });
  }

  onSubmit(value: any) {
    this.#contact.postMessage(value)
      .pipe(first())
      .subscribe(() => {
        this.formData.reset();
        this.#matSnackBar.open('Votre message à bien été envoyé')
      })
  }

  resolved(captchaResponse: boolean) {
    this.formData.controls['recaptcha'].setValue(captchaResponse);
  }
}

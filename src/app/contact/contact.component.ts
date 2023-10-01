import { AfterContentChecked, AfterViewInit, Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from "@angular/material/snack-bar";
import { first, tap } from 'rxjs';
import { AbstractLayoutComponent } from '../shared/layout/abstract-layout.component';
import { ContactService } from '../shared/services/contact.service';
import { LayoutService } from "../shared/services/layout.service";
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent extends AbstractLayoutComponent implements AfterContentChecked {
  #builder = inject(FormBuilder);
  #contact = inject(ContactService);
  #layoutService = inject(LayoutService);
  #matSnackBar = inject(MatSnackBar);
  #titleService = inject(Title);

  formData: FormGroup = this.#builder.group({
    fullname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl(''),
    comment: new FormControl('', [Validators.required]),
    consent: new FormControl(false, [Validators.requiredTrue]),
    recaptcha: new FormControl(false, [Validators.requiredTrue])
  });

  ngAfterContentChecked() {
    this.#layoutService.updateConfig({
      title: 'Contact et Tarifs',
      backgroundImage: 'plage.webp',
      body: this.bodyLayout,
      subtitle: this.subtitleLayout,
    });

    this.formData.statusChanges.subscribe(status => {
      const errorMessage = 'Erreur sur le formulaire | ';
      const title = status === 'INVALID' ? errorMessage + this.#titleService.getTitle() : this.#titleService.getTitle().replace(errorMessage, '')

      if (status === 'INVALID' && !this.#titleService.getTitle().includes(errorMessage)) {
        this.#titleService.setTitle(errorMessage + this.#titleService.getTitle())
      } else if (status === 'VALID') {
       this.#titleService.setTitle( this.#titleService.getTitle().replace(errorMessage, ''))
      }
    })
  }

  onSubmit(value: any) {
    this.#contact.postMessage(value)
      .then(() => {
        this.formData.reset();
        this.#matSnackBar.open('Votre message à bien été envoyé')
      })
  }

  resolved(captchaResponse: boolean) {
    this.formData.controls['recaptcha'].setValue(captchaResponse);
  }
}

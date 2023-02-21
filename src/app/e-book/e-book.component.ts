import {Component, OnDestroy} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ContactService} from "../shared/services/contact.service";
import {Subscription} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";

type Image = { id: number, path: string, alt: string, thumb: string }

@Component({
  selector: 'app-e-book',
  templateUrl: './e-book.component.html',
  styleUrls: ['./e-book.component.scss']
})
export class EBookComponent implements OnDestroy {
  images: Image[] = [
    {
      id: 0,
      path: '1.png',
      thumb: '1-thumb.png',
      alt: 'Page de garde du E-book',
    },
    {
      id: 1,
      path: '2.png',
      thumb: '2-thumb.png',
      alt: 'Page "est tu en hypothyroïdie ?"',
    },
    {
      id: 2,
      path: '3.png',
      thumb: '3-thumb.png',
      alt: `Page "focus sur l'iode"`,
    },
    {
      id: 3,
      path: '4.png',
      thumb: '4-thumb.png',
      alt: `Page "quelques recettes sucrées"`,
    },
  ];
  selectedImage = this.images[0];
  toggleBtn = false;
  formData: FormGroup = this.builder.group({
    fullName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    consent: new FormControl(false, [Validators.requiredTrue]),
    recaptcha: new FormControl(false, [Validators.requiredTrue])
  });
  #subscriptions$$: Subscription[] = []

  constructor(
    private builder: FormBuilder,
    private contactService: ContactService,
    private matSnackBar: MatSnackBar,
  ) {
  }

  trackById = (index: number, item: Image) => item.id;

  onSubmit(value: any) {
    this.#subscriptions$$.push(
      this.contactService.postMessage({...value, message: 'Je souhaite ton e-book !'})
        .subscribe(response => {
          this.formData.reset();
          this.matSnackBar.open('Votre e-book sera envoyé dans les plus bref délais')
        }))
  }

  resolved(captchaResponse: boolean) {
    this.formData.controls['recaptcha'].setValue(captchaResponse);
  }

  ngOnDestroy() {
    this.#subscriptions$$.forEach(subscription$$ => subscription$$.unsubscribe())
  }
}

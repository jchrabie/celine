import { Component } from '@angular/core';
import { AbstractLayoutComponent } from '../shared/layout/abstract-layout.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LayoutService } from "../shared/services/layout.service";
import { ContactService } from '../shared/services/contact.service';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent extends AbstractLayoutComponent {
  formData: FormGroup = this.builder.group({
    fullName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl(''),
    comment: new FormControl('', [Validators.required]),
    concent: new FormControl(false, [Validators.requiredTrue])
  }, { updateOn: 'blur' });

  constructor(private builder: FormBuilder, protected override layoutService: LayoutService, private contact: ContactService) {
    super(layoutService);

  }

  onSubmit(value: any) {
    this.contact.postMessage(value)
      .subscribe(response => {
        this.formData.reset()
      }, error => {
        console.warn(error.responseText)
        console.log({ error })
      })
  }
}

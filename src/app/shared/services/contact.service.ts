import { Injectable } from '@angular/core';
import { send } from '@emailjs/browser';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  postMessage(input: any) {
    return send("service_1uuzufj","template_d4zafrx", input, 'ExeN1mubJSivwoz-n')
  }
}

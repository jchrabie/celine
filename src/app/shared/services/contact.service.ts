import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private api = 'https://mailthis.to/chrabieceline@outlook.fr'
  #http = inject(HttpClient)

  postMessage(input: any) {
    return this.#http.post(this.api, input, { responseType: 'text'})
  }
}

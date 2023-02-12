import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private api = 'https://mailthis.to/chrabieceline@outlook.fr'
  constructor(private http: HttpClient) { }

  postMessage(input: any) {
    return this.http.post(this.api, input, { responseType: 'text'})
  }
}

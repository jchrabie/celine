import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GoogleReviewsService {
  private apiKey: string = 'AIzaSyBAR8mftB84eji0Lq-nGUgt9gdh1Vcov6Y';
  private placeId: string = 'ChIJKwmaUr1jD0gRzono3XG5VPo'; 

  constructor(private http: HttpClient) {}

  // Fonction pour obtenir la note moyenne
  getGoogleRating(): Observable<any> {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${this.placeId}&key=${this.apiKey}&fields=rating,user_ratings_total`;
    return of({rating: 5, user_ratings_total: 38});
  }
}

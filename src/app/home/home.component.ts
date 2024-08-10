import {AfterContentChecked, AfterViewInit, Component, OnInit, inject} from '@angular/core';
import {LayoutService} from '../shared/services/layout.service';
import {AbstractLayoutComponent} from '../shared/layout/abstract-layout.component';
import { GoogleReviewsService } from '../shared/services/google-reviews.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends AbstractLayoutComponent implements AfterContentChecked, OnInit {
  #layoutService = inject(LayoutService);
  #googleReviewsService = inject(GoogleReviewsService);
  rating: number | null = null;
  totalReviews: number | null = null;

  ngOnInit(): void {
    this.#googleReviewsService.getGoogleRating().subscribe((response: any) => {
      const result = response.result;
      if (result) {
        this.rating = result.rating || null;
        this.totalReviews = result.user_ratings_total || null;
      }
    });
  }
  
  ngAfterContentChecked() {
    this.#layoutService.updateConfig({
      title: '<span class="text-2xl sm:text-4xl">Céline Chrabie</span> <br/> <br/> Naturopathe certifiée<br/> Spécialisée dans les <strong>troubles de la thyroïde</strong>',
      backgroundImage: 'plage.webp',
      body: this.bodyLayout,
      subtitle: this.subtitleLayout,
    });
  }
}

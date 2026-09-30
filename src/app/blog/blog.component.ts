import { AfterContentChecked, ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BlogService } from '../shared/services/blog.service';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BreadcrumbsComponent } from '../shared/components/breadcrumbs/breadcrumbs.component';
import { AbstractLayoutComponent, LayoutComponent } from '../shared/layout';
import { LayoutService } from '../shared/services/layout.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [AsyncPipe, RouterLink, 
    LayoutComponent,
    BreadcrumbsComponent
  ],
  templateUrl: './blog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogComponent extends AbstractLayoutComponent implements AfterContentChecked {
  #layoutService = inject(LayoutService);
  private readonly blogService = inject(BlogService);

  readonly articles$ = this.blogService.getArticles();
  
  ngAfterContentChecked() {
    this.#layoutService.updateConfig({
      title: 'Naturopathe certifiée<br/> Spécialisée dans les <strong>troubles de la thyroïde</strong>',
      backgroundImage: 'plage.webp',
      body: this.bodyLayout,
      subtitle: this.subtitleLayout,
    });
  }

}
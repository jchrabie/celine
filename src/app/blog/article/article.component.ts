import { AfterContentChecked, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first, map, switchMap } from 'rxjs';
import { BlogService } from '../../shared/services/blog.service';
import { AsyncPipe } from '@angular/common';
import { BreadcrumbsComponent } from '../../shared/components/breadcrumbs/breadcrumbs.component';
import { MarkdownModule } from 'ngx-markdown';
import { AbstractLayoutComponent, LayoutComponent } from 'src/app/shared/layout';
import { LayoutService } from 'src/app/shared/services/layout.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  standalone: true,
  imports: [AsyncPipe, BreadcrumbsComponent, MarkdownModule, LayoutComponent],
})
export class ArticleComponent extends AbstractLayoutComponent implements AfterContentChecked {
  private readonly route = inject(ActivatedRoute);
  private readonly blogService = inject(BlogService);
  #layoutService = inject(LayoutService);

  readonly article$ = this.route.paramMap.pipe(
    map(params => params.get('slug') ?? ''),
    switchMap(slug => this.blogService.getArticle(slug))
  );
  
  ngAfterContentChecked() {
    this.article$.pipe(first()).subscribe(article => 
      this.#layoutService.updateConfig({
        title: article.title,
        backgroundImage: article.image?.replace('/assets/img/', ''),
        body: this.bodyLayout,
        subtitle: this.subtitleLayout,
      })
    );
  }
}
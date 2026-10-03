import { Component, ViewEncapsulation, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map, shareReplay, switchMap, tap } from 'rxjs';
import { BlogArticle, BlogService } from '../../shared/services/blog.service';
import { AsyncPipe } from '@angular/common';
import { BreadcrumbsComponent } from '../../shared/components/breadcrumbs/breadcrumbs.component';
import { MarkdownModule } from 'ngx-markdown';
import { AbstractLayoutComponent, LayoutComponent } from 'src/app/shared/layout';
import { LayoutService } from 'src/app/shared/services/layout.service';
import { MatIconModule } from '@angular/material/icon';
import { TagService } from 'src/app/shared/services/tag.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  standalone: true,
  styles: [` h2 { margin-bottom: .5rem; } `],
  imports: [AsyncPipe, BreadcrumbsComponent, MarkdownModule, LayoutComponent, RouterLink, MatIconModule],
  encapsulation: ViewEncapsulation.None
})
export class ArticleComponent extends AbstractLayoutComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly blogService = inject(BlogService);
  private readonly layoutService = inject(LayoutService);
  private readonly tagService = inject(TagService);

   readonly article$ = this.route.data.pipe(
    map(data => data['article'] as BlogArticle),
    tap(article => {
      this.layoutService.updateConfig({
        title: article.title,
        backgroundImage: article.image?.replace('/assets/img/', '') ?? '',
        body: this.bodyLayout,
        subtitle: this.subtitleLayout,
      });

      const baseUrl = 'https://www.bien-avec-sa-thyroide.com';
      const canonical = `${baseUrl}/blog/article/${encodeURIComponent(article.slug)}`;
      const imagePath = article.image
        ? new URL(article.image, baseUrl).toString()
        : `${baseUrl}/assets/img/logo.png`;

      this.tagService.setSeo({
        type: `/blog/article/${article.slug}`,
        title: `${article.title} | Bien avec sa thyroïde`,
        name: article.title,
        imagePath,
        imageAlt: article.title,
        description: article.description || article.title,
        canonical,
        enabled: false,
        clazz: 'blog-article',
      }, 'article');
    }),
    shareReplay({ bufferSize: 1, refCount: true })
  );
}

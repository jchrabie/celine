import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { BlogArticle, BlogService } from './shared/services/blog.service';

export const articleResolver: ResolveFn<BlogArticle> = route => {
  const blogService = inject(BlogService);
  const slug = route.paramMap.get('slug') ?? '';

  return blogService.getArticle(slug);
};
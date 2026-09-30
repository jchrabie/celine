import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, Observable, switchMap } from 'rxjs';
import { parse } from 'yaml';

export interface BlogArticle {
  slug: string;
  title: string;
  description: string;
  image?: string;
  date: string;
  content: string;
}

interface GithubFile {
  name: string;
  download_url: string;
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private readonly http = inject(HttpClient);

  private readonly githubApiUrl =
    'https://api.github.com/repos/jchrabie/celine/contents/content/articles';

  getArticles(): Observable<BlogArticle[]> {
  return this.http.get<GithubFile[]>(this.githubApiUrl).pipe(
    map(files =>
      files.filter(file => file.name.endsWith('.md'))
    ),
    switchMap(files =>
      forkJoin(
        files.map((file: any) =>
          this.http
            .get(file.download_url, {
              responseType: 'text'
            })
            .pipe(
              map(content =>
                this.parseMarkdown(
                  content,
                  file.name.replace(/\.md$/, '')
                )
              )
            )
        )
      )
    ),
    map((articles: BlogArticle[]) =>
      articles.sort(
        (a, b) =>
          new Date(b.date).getTime() -
          new Date(a.date).getTime()
      )
    )
  );
}

  getArticle(slug: string): Observable<BlogArticle> {
    return this.http
      .get(`https://raw.githubusercontent.com/jchrabie/celine/main/content/articles/${encodeURIComponent(slug)}.md`, {
        responseType: 'text'
      })
      .pipe(
        map(content => this.parseMarkdown(content, slug))
      );
  }

  private parseMarkdown(content: string, slug: string): BlogArticle {
  const normalizedContent = content
    .replace(/^\uFEFF/, '')
    .trim();

  const match = normalizedContent.match(
    /^---\s*([\s\S]*?)\s*---\s*([\s\S]*)$/
  );

  if (!match) {
    return {
      slug,
      title: slug,
      description: '',
      date: '',
      content: normalizedContent
    };
  }

  const frontMatter = parse(match[1]);

  return {
    slug,
    title: frontMatter.title ?? slug,
    description: frontMatter.description ?? '',
    image: frontMatter.image,
    date: frontMatter.date ?? '',
    content: match[2].trim()
  };
}
}
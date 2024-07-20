import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { isPlatformServer } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

class MetaTag {
  name?: string;
  property?: string;
  content: string;

  constructor(name: string, property: string, content: string) {
    this.name = name;
    this.property = property;
    this.content = content;
  }
}

@Injectable({
  providedIn: 'root',
})
export class TagService {
  private urlMeta: string = 'url';
  private titleMeta: string = 'title';
  private descriptionMeta: string = 'description';
  private imageMeta: string = 'image';

  constructor(
    private titleService: Title,
    private metaService: Meta,
    @Inject(DOCUMENT) private doc: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  public setTitle(title: string): void {
    const fullTitle = `Céline CHRABIE | ${title}`;
    this.titleService.setTitle(fullTitle);
    this.metaService.updateTag({ name: 'title', content: fullTitle });
  }

  public setSocialMediaTags(
    url: string,
    title: string,
    description: string,
    image: string
  ): void {
    const realUrl = url.includes('bien-avec-sa-thyroide.com') ? url : `https://www.bien-avec-sa-thyroide.com${url}`;
    const tags = [
      new MetaTag(this.urlMeta, `og:${this.urlMeta}`, realUrl),
      new MetaTag(this.titleMeta, `og:${this.titleMeta}`, `Céline CHRABIE | ${title}`),
      new MetaTag(this.descriptionMeta, `og:${this.descriptionMeta}`, description),
      new MetaTag(this.imageMeta, `og:${this.imageMeta}`, image),
      new MetaTag('twitter:card', '', 'summary_large_image'),
      new MetaTag('twitter:title', '', `Céline CHRABIE | ${title}`),
      new MetaTag('twitter:description', '', description),
      new MetaTag('twitter:image', '', image)
    ];

    this.setTags(tags);
    this.setTitle(title);
    this.createLinkForCanonicalURL(realUrl);
    this.setStructuredData(title, description, realUrl, image);
  }

  private setTags(tags: MetaTag[]): void {
    tags.forEach((tag) => {
      if (tag.name) {
        this.metaService.updateTag({ name: tag.name, content: tag.content });
      }
      if (tag.property) {
        this.metaService.updateTag({ property: tag.property, content: tag.content });
      }
    });
  }

  private createLinkForCanonicalURL(url: string) {
    if (isPlatformServer(this.platformId)) {
      let canonical: HTMLLinkElement| null = this.doc.querySelector("link[rel='canonical']");
      if (canonical) {
        canonical.href = url;
      } else {
        canonical = this.doc.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        canonical.setAttribute('href', url);
        this.doc.head.appendChild(canonical);
      }
    }
  }

  private setStructuredData(title: string, description: string, url: string, image: string) {
    if (isPlatformServer(this.platformId)) {
      const script = this.doc.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': title,
        'description': description,
        'url': url,
        'image': image,
        'publisher': {
          '@type': 'Organization',
          'name': 'Céline CHRABIE',
          'logo': {
            '@type': 'ImageObject',
            'url': image
          }
        },
        'author': {
          '@type': 'Person',
          'name': 'Céline CHRABIE'
        }
      });
      this.doc.head.appendChild(script);
    }
  }
}

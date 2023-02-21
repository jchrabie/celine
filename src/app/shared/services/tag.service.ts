import {Inject, Injectable} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {DOCUMENT} from '@angular/common';

class MetaTag {
  name: string;
  property: string;
  value: string;

  constructor(name: string, property: string, value: string) {
    this.name = name;
    this.property = property;
    this.value = value;
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
    @Inject(DOCUMENT) private doc: Document
  ) {
  }

  public setTitle(title: string): void {
    this.titleService.setTitle(`Céline CHRABIE | ${title}`);
  }

  public setSocialMediaTags(
    url: string,
    title: string,
    description: string,
    image: string
  ): void {
    const tags = [
      new MetaTag(this.urlMeta, `og:${this.urlMeta}`, this.doc.URL),
      new MetaTag(
        this.titleMeta,
        `og:${this.titleMeta}`,
        `Céline CHRABIE | ${title}`
      ),
      new MetaTag(
        this.descriptionMeta,
        `og:${this.descriptionMeta}`,
        description
      ),
      new MetaTag(this.imageMeta, `og:${this.imageMeta}`, image),
    ];

    this.setTags(tags);
    this.setTitle(title);
    this.createLinkForCanonicalURL();
  }

  private setTags(tags: MetaTag[]): void {
    tags.forEach((siteTag) =>
      this.metaService.updateTag({
        name: siteTag.name,
        property: siteTag.property,
        content: siteTag.value,
      })
    );
  }

  private createLinkForCanonicalURL() {
    const canonical: HTMLLinkElement | undefined = Array.from(
      this.doc.head.getElementsByTagName('link')
    ).find((l: HTMLLinkElement) => l.rel === 'canonical');
    const shortLink: HTMLLinkElement | undefined = Array.from(
      this.doc.head.getElementsByTagName('link')
    ).find((l: HTMLLinkElement) => l.rel === 'shortlink');
    canonical?.setAttribute('href', this.doc.URL);
    shortLink?.setAttribute('href', this.doc.URL);
  }
}

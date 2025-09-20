import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { Header, StructuredData } from '../models/seo';

type MetaTag = {
  name?: string;
  property?: string;
  content: string;
};

@Injectable({
  providedIn: 'root',
})
export class TagService {

  private readonly siteName = 'Bien avec sa thyroïde';
  private readonly author = 'Céline CHRABIE';
  private readonly baseUrl = 'https://www.bien-avec-sa-thyroide.com';
  private readonly defaultRobots = 'index,follow,max-image-preview:large';

  constructor(
    private readonly titleService: Title,
    private readonly meta: Meta,
    @Inject(DOCUMENT) private readonly document: Document
  ) {}

  setSeo(header: Header): void {
    const {
      title,
      description,
      imagePath,
      imageAlt,
      canonical,
      seo
    } = header;

    this.titleService.setTitle(title);

    this.updateTags([
      {
        name: 'description',
        content: description
      },
      {
        name: 'robots',
        content: seo?.robots ?? this.defaultRobots
      },
      {
        name: 'author',
        content: this.author
      },
      {
        name: 'application-name',
        content: this.siteName
      },

      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:locale',
        content: 'fr_FR'
      },
      {
        property: 'og:site_name',
        content: this.siteName
      },
      {
        property: 'og:title',
        content: title
      },
      {
        property: 'og:description',
        content: description
      },
      {
        property: 'og:url',
        content: canonical
      },
      {
        property: 'og:image',
        content: imagePath
      },
      {
        property: 'og:image:alt',
        content: imageAlt ?? title
      },

      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:title',
        content: title
      },
      {
        name: 'twitter:description',
        content: description
      },
      {
        name: 'twitter:image',
        content: imagePath
      },
      {
        name: 'twitter:site',
        content: '@bien_avec_sa_thyroide_'
      }
    ]);

    this.setCanonical(canonical);

    if (seo?.structuredData) {
      this.setStructuredData(
        seo.structuredData,
        title,
        description,
        canonical,
        imagePath
      );
    } else {
      this.removeStructuredData();
    }
  }

  private updateTags(tags: MetaTag[]): void {
    tags.forEach(tag => this.meta.updateTag(tag));
  }

  private setCanonical(url: string): void {
    let link =
      this.document.querySelector<HTMLLinkElement>(
        'link[rel="canonical"]'
      );

    if (!link) {
      link = this.document.createElement('link');
      link.rel = 'canonical';
      this.document.head.appendChild(link);
    }

    link.href = url;
  }

  private setStructuredData(
    structuredData: StructuredData,
    title: string,
    description: string,
    url: string,
    image: string
  ): void {
    const id = 'structured-data';

    let script =
      this.document.getElementById(id) as HTMLScriptElement | null;

    if (!script) {
      script = this.document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      this.document.head.appendChild(script);
    }

    const data = {
      '@context': 'https://schema.org',
      '@type': structuredData.type,

      '@id': `${url}#business`,

      name: structuredData.name ?? this.author,
      description,
      url,
      image,
      logo: `${this.baseUrl}/assets/img/logo.png`,

      ...(structuredData.telephone && {
        telephone: structuredData.telephone
      }),

      ...(structuredData.email && {
        email: structuredData.email
      }),

      ...(structuredData.priceRange && {
        priceRange: structuredData.priceRange
      }),

      ...(structuredData.areaServed?.length && {
        areaServed: structuredData.areaServed
      }),

      ...(structuredData.address && {
        address: {
          '@type': 'PostalAddress',
          ...structuredData.address
        }
      }),

      ...(structuredData.geo && {
        geo: {
          '@type': 'GeoCoordinates',
          ...structuredData.geo
        }
      }),

      ...(structuredData.openingHours?.length && {
        openingHoursSpecification:
          structuredData.openingHours.map(hours => ({
            '@type': 'OpeningHoursSpecification',
            ...hours
          }))
      }),

      ...(structuredData.sameAs?.length && {
        sameAs: structuredData.sameAs
      })
    };

    script.text = JSON.stringify(data);
  }

  private removeStructuredData(): void {
    this.document
      .getElementById('structured-data')
      ?.remove();
  }
}
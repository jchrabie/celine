export interface Header {
  type: string;
  title: string;
  name: string;
  imagePath: string;
  imageAlt?: string;
  description: string;
  canonical: string;
  enabled: boolean;
  clazz: string;
  external?: boolean;
  seo?: SeoData;
}

export interface SeoData {
  robots?: string;
  structuredData?: StructuredData;
}

export interface StructuredData {
  type: string;
  name?: string;
  telephone?: string;
  email?: string;
  priceRange?: string;
  areaServed?: string[];
  address?: PostalAddress;
  geo?: GeoCoordinates;
  openingHours?: OpeningHours[];
  sameAs?: string[];
}

export interface PostalAddress {
  streetAddress: string;
  postalCode: string;
  addressLocality: string;
  addressCountry: string;
  addressRegion?: string;
}

export interface GeoCoordinates {
  latitude: number;
  longitude: number;
}

export interface OpeningHours {
  dayOfWeek: string[];
  opens: string;
  closes: string;
}
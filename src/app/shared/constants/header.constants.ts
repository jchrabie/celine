import { Header } from '../models/seo';
import { Link } from '../models';

const BASE_URL = 'https://www.bien-avec-sa-thyroide.com';
const DEFAULT_IMAGE = `${BASE_URL}/assets/img/logo.png`;

const COMMON_SAME_AS = [
  'https://www.instagram.com/bien_avec_sa_thyroide_/',
  'https://www.facebook.com/celinenaturopathie.naturopathie'
];

export const headers: Header[] = [
  {
    type: '/',
    title: 'Naturopathe spécialisée thyroïde, Hashimoto et hypothyroïdie | Céline Chrabie',
    name: 'Accueil',
    imagePath: DEFAULT_IMAGE,
    imageAlt: 'Bien avec sa thyroïde - Céline Chrabie',
    description:
      'Céline Chrabie, naturopathe spécialisée dans les troubles de la thyroïde, accompagne les personnes concernées par l’hypothyroïdie et la maladie de Hashimoto à Blain, Nantes et en visioconférence.',
    canonical: `${BASE_URL}/`,
    enabled: true,
    clazz: 'home'
  },
  {
    type: '/cabinets/blain',
    title: 'Naturopathe spécialisée thyroïde à Blain (44) | Céline Chrabie',
    name: 'Naturopathe à Blain',
    imagePath: `${BASE_URL}/assets/img/cabinet-blain/cabinet-blain-consultation.jpg`,
    imageAlt: 'Cabinet de naturopathie de Céline Chrabie à Blain',
    description:
      'Céline Chrabie, naturopathe spécialisée dans les troubles de la thyroïde, vous accueille à Blain (44). Accompagnement personnalisé de l’hypothyroïdie et de la maladie de Hashimoto, au cabinet ou en visioconférence.',
    canonical: `${BASE_URL}/cabinets/blain`,
    enabled: false,
    clazz: 'blain',
    seo: {
      structuredData: {
        type: 'LocalBusiness',
        name: 'Céline Chrabie – Naturopathe à Blain',
        telephone: '+33610830253',
        email: 'chrabieceline@outlook.fr',
        priceRange: '€€',
        areaServed: [
          'Blain',
          'Bouvron',
          'Le Gâvre',
          'Nozay',
          'Plessé',
          'Nort-sur-Erdre',
          'Savenay',
          'Redon',
          'Fay-de-Bretagne',
          'Pontchâteau'
        ],
        openingHours: [
          {
            dayOfWeek: ['Monday', 'Tuesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:00'
          }
        ],
        address: {
          streetAddress: '2 Rue du Berry',
          postalCode: '44130',
          addressLocality: 'Blain',
          addressCountry: 'FR'
        },
        sameAs: COMMON_SAME_AS
      }
    }
  },
  {
    type: '/cabinets/nantes',
    title: 'Naturopathe spécialisée thyroïde à Nantes | Céline Chrabie',
    name: 'Naturopathe à Nantes',
    imagePath: DEFAULT_IMAGE,
    imageAlt: 'Céline Chrabie, naturopathe spécialisée dans les troubles de la thyroïde',
    description:
      'Céline Chrabie, naturopathe spécialisée dans les troubles de la thyroïde, vous accueille à Nantes. Accompagnement personnalisé de l’hypothyroïdie et de la maladie de Hashimoto, au cabinet ou en visioconférence.',
    canonical: `${BASE_URL}/cabinets/nantes`,
    enabled: false,
    clazz: 'nantes',
    seo: {
      structuredData: {
        type: 'LocalBusiness',
        name: 'Céline Chrabie – Naturopathe à Nantes',
        telephone: '+33610830253',
        email: 'chrabieceline@outlook.fr',
        priceRange: '€€',
        areaServed: [
          'Nantes',
          'Saint-Herblain',
          'Orvault',
          'Rezé',
          'Vertou',
          'Carquefou',
          'Sainte-Luce-sur-Loire'
        ],
        openingHours: [
          {
            dayOfWeek: ['Wednesday'],
            opens: '09:00',
            closes: '18:00'
          }
        ],
        address: {
          streetAddress: '9 avenue de Salonique',
          postalCode: '44300',
          addressLocality: 'Nantes',
          addressCountry: 'FR'
        },
        sameAs: COMMON_SAME_AS
      }
    }
  },
  {
    type: '/cabinet/visio',
    title: 'Consultation de naturopathie en visioconférence | Céline Chrabie',
    name: 'Consultation en visio',
    imagePath: DEFAULT_IMAGE,
    imageAlt: 'Consultation de naturopathie en visioconférence avec Céline Chrabie',
    description:
      'Consultez Céline Chrabie en visioconférence pour un accompagnement en naturopathie autour de la thyroïde, de l’hypothyroïdie et de la maladie de Hashimoto, où que vous soyez en France.',
    canonical: `${BASE_URL}/cabinet/visio`,
    enabled: false,
    clazz: 'visio'
  },
  {
    type: '/a-propos',
    title: 'À propos | Naturopathe spécialisée thyroïde',
    name: 'À propos',
    imagePath: DEFAULT_IMAGE,
    imageAlt: 'Céline Chrabie, naturopathe spécialisée dans les troubles de la thyroïde',
    description:
      'Découvrez le parcours de Céline Chrabie, naturopathe spécialisée dans l’accompagnement des troubles de la thyroïde, de l’hypothyroïdie et de la maladie de Hashimoto.',
    canonical: `${BASE_URL}/a-propos`,
    enabled: true,
    clazz: 'a-propos'
  },
  {
    type: '/hypothyroidie',
    title: 'Hypothyroïdie : accompagnement en naturopathie | Céline Chrabie',
    name: 'Hypothyroïdie',
    imagePath: DEFAULT_IMAGE,
    imageAlt: 'Accompagnement en naturopathie autour de l’hypothyroïdie',
    description:
      'Découvrez un accompagnement en naturopathie autour de l’hypothyroïdie : alimentation, hygiène de vie, apports nutritionnels et conseils personnalisés, en complément du suivi médical.',
    canonical: `${BASE_URL}/hypothyroidie`,
    enabled: true,
    clazz: 'hypothyroidie'
  },

  {
    type: '/hashimoto',
    title: 'Hashimoto : accompagnement en naturopathie | Céline Chrabie',
    name: 'Hashimoto',
    imagePath: DEFAULT_IMAGE,
    imageAlt: 'Accompagnement en naturopathie autour de la maladie de Hashimoto',
    description:
      'Découvrez l’approche de Céline Chrabie autour de la maladie de Hashimoto : alimentation, hygiène de vie et accompagnement personnalisé, en complément du suivi médical.',
    canonical: `${BASE_URL}/hashimoto`,
    enabled: true,
    clazz: 'hashimoto'
  },
  {
    type: 'https://calendly.com/chrabieceline',
    title: 'Prendre rendez-vous',
    name: 'Prendre rendez-vous',
    imagePath: '',
    description: '',
    canonical: '',
    external: true,
    enabled: true,
    clazz: 'rdv'
  },
  {
    type: '/contact',
    title: 'Contact | Naturopathe spécialisée thyroïde',
    name: 'Contact',
    imagePath: DEFAULT_IMAGE,
    imageAlt: 'Contacter Céline Chrabie, naturopathe',
    description:
      'Contactez Céline Chrabie pour une consultation de naturopathie spécialisée dans les troubles de la thyroïde à Blain, Nantes ou en visioconférence.',
    canonical: `${BASE_URL}/contact`,
    enabled: true,
    clazz: 'contact'
  },
  {
    type: '/tarifs',
    title: 'Tarifs des consultations de naturopathie | Céline Chrabie',
    name: 'Tarifs',
    imagePath: DEFAULT_IMAGE,
    imageAlt: 'Tarifs des consultations de naturopathie',
    description:
      'Découvrez les tarifs des consultations de naturopathie et des accompagnements proposés par Céline Chrabie à Blain, Nantes et en visioconférence.',
    canonical: `${BASE_URL}/tarifs`,
    enabled: true,
    clazz: 'tarifs'
  },
  {
    type: '/e-books',
    title: 'E-books sur la thyroïde, Hashimoto et l’hypothyroïdie',
    name: 'E-books',
    imagePath: DEFAULT_IMAGE,
    imageAlt: 'E-books sur la thyroïde',
    description:
      'Retrouvez les e-books de Céline Chrabie pour mieux comprendre la thyroïde, l’hypothyroïdie et la maladie de Hashimoto, avec des conseils pratiques et des recettes.',
    canonical: `${BASE_URL}/e-books`,
    enabled: true,
    clazz: 'e-books'
  },
  {
    type: '/e-books/hashimoto-comment-dompter-la-maladie',
    title: 'Hashimoto : Comment dompter la maladie | E-book',
    name: 'E-books',
    imagePath: DEFAULT_IMAGE,
    imageAlt: 'E-book sur la maladie de Hashimoto',
    description:
      'Un guide pratique pour mieux comprendre la maladie de Hashimoto et explorer des pistes autour de l’alimentation et de l’hygiène de vie.',
    canonical: `${BASE_URL}/e-books/hashimoto-comment-dompter-la-maladie`,
    enabled: false,
    clazz: 'hashimoto-comment-dompter-la-maladie'
  },
  {
    type: '/e-books/prendre-soin-de-sa-thyroide',
    title: 'Prendre soin de sa thyroïde | E-book',
    name: 'E-books',
    imagePath: DEFAULT_IMAGE,
    imageAlt: 'E-book Prendre soin de sa thyroïde',
    description:
      'Découvrez les bases pour mieux comprendre votre thyroïde et explorer des pistes autour de l’alimentation et de l’hygiène de vie.',
    canonical: `${BASE_URL}/e-books/prendre-soin-de-sa-thyroide`,
    enabled: false,
    clazz: 'prendre-soin-de-sa-thyroide'
  },
  {
    type: '/e-books/hashimoto-15-jours-de-menu-pour-chouchouter-ta-thyroide',
    title: '15 jours de menus pour Hashimoto | E-book',
    name: 'E-books',
    imagePath: DEFAULT_IMAGE,
    imageAlt: 'E-book 15 jours de menus pour Hashimoto',
    description:
      '15 jours de menus, listes de courses et recettes pour vous aider à organiser votre alimentation au quotidien.',
    canonical: `${BASE_URL}/e-books/hashimoto-15-jours-de-menu-pour-chouchouter-ta-thyroide`,
    enabled: false,
    clazz: 'ebook-menu'
  },

  {
    type: '/e-books/50-recettes-fraicheur',
    title: '50 recettes fraîcheur | E-book',
    name: 'E-books',
    imagePath: DEFAULT_IMAGE,
    imageAlt: 'E-book 50 recettes fraîcheur',
    description:
      '50 recettes fraîches, simples et gourmandes pour varier vos repas au quotidien.',
    canonical: `${BASE_URL}/e-books/50-recettes-fraicheur`,
    enabled: false,
    clazz: '50-recettes'
  },

  {
    type: '/mentions-legales',
    title: 'Mentions légales',
    name: 'Mentions légales',
    imagePath: DEFAULT_IMAGE,
    imageAlt: 'Bien avec sa thyroïde',
    description:
      'Consultez les mentions légales du site Bien avec sa thyroïde édité par Céline Chrabie.',
    canonical: `${BASE_URL}/mentions-legales`,
    enabled: false,
    clazz: 'mentions-legales'
  },

  {
    type: '/politique-de-confidentialite',
    title: 'Politique de confidentialité',
    name: 'Politique de confidentialité',
    imagePath: DEFAULT_IMAGE,
    imageAlt: 'Bien avec sa thyroïde',
    description:
      'Découvrez comment vos données personnelles sont collectées, utilisées et protégées conformément au RGPD.',
    canonical: `${BASE_URL}/politique-de-confidentialite`,
    enabled: false,
    clazz: 'politique-de-confidentialite'
  },

  {
    type: '/accessibilite',
    title: 'Déclaration d’accessibilité',
    name: 'Accessibilité',
    imagePath: DEFAULT_IMAGE,
    imageAlt: 'Bien avec sa thyroïde',
    description:
      'Consultez la déclaration d’accessibilité et les engagements pris pour rendre le site Bien avec sa thyroïde accessible au plus grand nombre.',
    canonical: `${BASE_URL}/accessibilite`,
    enabled: false,
    clazz: 'a11y'
  }
];

export function getHeaderByType(type: string): Header {
  return headers.find(header => header.type === type) ?? headers[0];
}

export function getLinks(): Link[] {
  return headers
    .filter(({ enabled }) => enabled)
    .map(({ title, type, name, enabled, external, clazz }) => ({
      title,
      type,
      name,
      enabled,
      external,
      clazz
    }));
}
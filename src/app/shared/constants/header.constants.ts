import { Header, Link } from '../../models';

export const headers: Header[] = [
  {
    type: '',
    title: 'Naturopathe - Réflexologue - Iridologue',
    name: 'Accueil',
    imagePath: 'https://www.celine-naturopathe.fr/assets/logo.jpg',
    description: `Vous avez envie de prendre soin de vous, de prendre en charge votre santé et votre bien-être ou de (re)devenir acteur de votre santé ? Alors, il se pourrait bien que vous soyez au bon endroit !`,
    canonical: 'https://www.celine-naturopathe.fr',
    enabled: false,
  },
  {
    type: 'consultation',
    title: 'Consultation',
    name: 'Consultation',
    imagePath: 'https://www.celine-naturopathe.fr/assets/consultations.jpg',
    description:
      "Consultation",
    canonical: 'https://www.celine-naturopathe.fr/consultation',
    enabled: true,
  },
  {
    type: 'hypothyroidie',
    title: 'Hypothyroïdie',
    name: 'Hypothyroïdie',
    imagePath: 'https://www.celine-naturopathe.fr/assets/hypo.jpg',
    description: 'Hypothyroïdie',
    canonical: 'https://www.celine-naturopathe.fr/hypo',
    enabled: true,
  },
  {
    type: 'hashimoto',
    title: 'Hashimoto',
    name: 'Hashimoto',
    imagePath: 'https://www.celine-naturopathe.fr/assets/hashimoto.jpg',
    description: 'Hashimoto',
    canonical: 'https://www.celine-naturopathe.fr/hashimoto',
    enabled: true,
  },
  {
    type: 'rendez-vous',
    title: 'Prendre rendez-vous',
    name: 'Rendez-vous',
    imagePath: 'https://www.celine-naturopathe.fr/assets/rendez-vous.jpg',
    description: 'Prendre rendez-vous',
    canonical: 'https://www.celine-naturopathe.fr/rendez-vous',
    enabled: true,
  },
  {
    type: 'contact',
    title: 'Contact',
    name: 'Contact',
    imagePath: 'https://www.celine-naturopathe.fr/assets/contact.jpg',
    description: 'Coordonnées pour me rencontrer',
    canonical: 'https://www.celine-naturopathe.fr/contact',
    enabled: true,
  },
];

export function getHeaderByType(type: string): Header {
  return headers.find((header) => header.type === type) || ({} as Header);
}

export function getLinks(): Link[] {
  return headers
    .map(({ title, type, name, enabled }) => ({
      title,
      type,
      name,
      enabled,
    }))
    .filter(({ enabled }) => enabled);
}

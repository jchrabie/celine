import { Header, Link } from '../../models';

export const headers: Header[] = [
  {
    type: '',
    title: 'Naturopathe - Réflexologue - Iridologue',
    name: 'Accueil',
    imagePath: 'https://www.celine-naturo.com/assets/logo.jpg',
    description: `Vous avez envie de prendre soin de vous, de prendre en charge votre santé et votre bien-être ou de (re)devenir acteur de votre santé ? Alors, il se pourrait bien que vous soyez au bon endroit !`,
    canonical: 'https://www.celine-naturo.com',
    enabled: false,
  },
  {
    type: 'qui-suis-je',
    title: 'Qui suis-je',
    name: 'Qui suis-je',
    imagePath: 'https://www.celine-naturo.com/assets/skills.jpg',
    description:
      "Voici les skills que j'ai pu acquérir tout au long de mes différentes expériences",
    canonical: 'https://www.celine-naturo.com/skills',
    enabled: true,
  },
  {
    type: 'pourquoi-venir',
    title: 'Pourquoi venir?',
    name: 'Pourquoi venir?',
    imagePath: 'https://www.celine-naturo.com/assets/blog.jpg',
    description: 'Liste de mes articles',
    canonical: 'https://www.celine-naturo.com/blog',
    enabled: true,
  },
  {
    type: 'temoignages',
    title: 'Témoignages',
    name: 'Témoignages',
    imagePath: 'https://www.celine-naturo.com/assets/experiences.jpg',
    description: 'Visualisation de mes différentes expériences',
    canonical: 'https://www.webster-dev.fr/experiences',
    enabled: true,
  },
  {
    type: 'contact',
    title: 'Contact et tarif',
    name: 'Contact et tarif',
    imagePath: 'https://www.celine-naturo.com/assets/contact.jpg',
    description: 'Coordonnées pour me rencontrer',
    canonical: 'https://www.webster-dev.fr/contact',
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

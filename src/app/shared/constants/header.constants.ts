import {Header, Link} from '../models';
import {Ville} from "../models/ville";

export const headers: Header[] = [
  {
    type: '',
    title: 'Naturopathe spécialisée dans les troubles de la thyroïde',
    name: 'Accueil',
    imagePath: 'https://www.celine-naturopathe.fr/assets/img/logo.jpg',
    description: `Vous avez envie de prendre soin de vous, de prendre en charge votre santé et votre bien-être ou de (re)devenir acteur de votre santé ? Alors, il se pourrait bien que vous soyez au bon endroit ! Je suis Céline Chrabie Naturopathe spécialisée dans les troubles de la thyroïde`,
    canonical: 'https://www.celine-naturopathe.fr',
    enabled: true,
  },
  {
    type: 'a-propos',
    title: 'A propos de moi',
    name: 'A propos',
    imagePath: 'https://www.celine-naturopathe.fr/assets/img/logo.jpg',
    description:
      "Je suis Céline et je vous accompagne pour retrouver un confort de vie en optimisant le fonctionnement de votre thyroïde",
    canonical: 'https://www.celine-naturopathe.fr/a-propos',
    enabled: true,
  },
  {
    type: 'hypothyroidie',
    title: 'Hypothyroïdie',
    name: 'Hypothyroïdie',
    imagePath: 'https://www.celine-naturopathe.fr/assets/img/logo.jpg',
    description: 'Hypothyroïdie',
    canonical: 'https://www.celine-naturopathe.fr/hypo',
    enabled: true,
  },
  {
    type: 'hashimoto',
    title: 'Hashimoto',
    name: 'Hashimoto',
    imagePath: 'https://www.celine-naturopathe.fr/assets/img/logo.jpg',
    description: 'Hashimoto',
    canonical: 'https://www.celine-naturopathe.fr/hashimoto',
    enabled: true,
  },
  // {
  //   type: 'rendez-vous',
  //   title: 'Prendre rendez-vous',
  //   name: 'Rendez-vous',
  //   imagePath: 'https://www.celine-naturopathe.fr/assets/img/logo.jpg',
  //   description: 'Prendre rendez-vous',
  //   canonical: 'https://www.celine-naturopathe.fr/rendez-vous',
  //   enabled: false,
  // },
  {
    type: 'contact',
    title: 'Contact et Tarifs',
    name: 'Contact et Tarifs',
    imagePath: 'https://www.celine-naturopathe.fr/assets/img/logo.jpg',
    description: 'Coordonnées pour me rencontrer',
    canonical: 'https://www.celine-naturopathe.fr/contact',
    enabled: true,
  },
  {
    type: 'e-book',
    title: 'E-book',
    name: 'E-book',
    imagePath: 'https://www.celine-naturopathe.fr/assets/img/logo.jpg',
    description: 'E-book naturopathie',
    canonical: 'https://www.celine-naturopathe.fr/e-book',
    enabled: false,
  },
  {
    type: 'mentions-legales',
    title: 'Mentions légales',
    name: 'Mentions légales',
    imagePath: 'https://www.celine-naturopathe.fr/assets/img/logo.jpg',
    description: 'Mentions légales naturopathie',
    canonical: 'https://www.celine-naturopathe.fr/mentions-legales',
    enabled: false,
  },
  {
    type: 'politique-de-confidentialite',
    title: 'Politique de confidentialité',
    name: 'Politique de confidentialité',
    imagePath: 'https://www.celine-naturopathe.fr/assets/img/logo.jpg',
    description: 'Politique de confidentialité naturopathie',
    canonical: 'https://www.celine-naturopathe.fr/politique-de-confidentialite',
    enabled: false,
  },
  {
    type: 'accessibilite',
    title: 'Accessibilité',
    name: 'Accessibilité',
    imagePath: 'https://www.celine-naturopathe.fr/assets/img/logo.jpg',
    description: 'Accessibilité naturopathie',
    canonical: 'https://www.celine-naturopathe.fr/accessibilite',
    enabled: false,
  },
  {
    type: 'votre-naturopathe-a',
    title: 'Votre naturopathe à ',
    name: 'Votre naturopathe à ',
    imagePath: 'https://www.celine-naturopathe.fr/assets/img/logo.jpg',
    description: 'Votre naturopathe à ',
    canonical: 'https://www.celine-naturopathe.fr/votre-naturopathe-a',
    enabled: false,
  },
];

export function getHeaderByType(type: string, ville?: Ville | null): Header {
  const header = headers.find((header) => header.type === type) || headers[0];

  if (ville) {
    header.title += ville;
    header.description += ville;
    header.name += ville;
  }

  return header
}

export function getLinks(): Link[] {
  return headers
    .map(({title, type, name, enabled}) => ({
      title,
      type,
      name,
      enabled,
    }))
    .filter(({enabled}) => enabled);
}

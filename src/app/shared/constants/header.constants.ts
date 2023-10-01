import {Header, Link} from '../models';
import {Ville} from "../models/ville";

export const headers: Header[] = [
  {
    type: '',
    title: 'Naturopathe spécialisée dans les troubles de la thyroïde',
    name: 'Accueil',
    imagePath: 'https://www.bien-avec-sa-thyroide.com/assets/img/logo.png',
    description: `Vous avez envie de prendre soin de vous, de prendre en charge votre santé et votre bien-être ou de (re)devenir acteur de votre santé ? Alors, il se pourrait bien que vous soyez au bon endroit ! Je suis Céline Chrabie Naturopathe spécialisée dans les troubles de la thyroïde à blain 44 ou en visio`,
    canonical: 'https://www.bien-avec-sa-thyroide.com',
    enabled: true,
  },
  {
    type: 'a-propos',
    title: 'A propos de moi',
    name: 'A propos',
    imagePath: 'https://www.bien-avec-sa-thyroide.com/assets/img/logo.png',
    description:
      "Je suis Céline, Naturopathe à blain 44 et je vous accompagne pour retrouver un confort de vie en optimisant le fonctionnement de votre thyroïde",
    canonical: 'https://www.bien-avec-sa-thyroide.com/a-propos',
    enabled: true,
  },
  {
    type: 'hypothyroidie',
    title: 'Hypothyroïdie',
    name: 'Hypothyroïdie',
    imagePath: 'https://www.bien-avec-sa-thyroide.com/assets/img/logo.png',
    description: `Vous avez envie de prendre soin de vous, de prendre en charge votre santé et votre bien-être ou de (re)devenir acteur de votre santé ? Alors, il se pourrait bien que vous soyez au bon endroit ! Je suis Céline Chrabie Naturopathe spécialisée dans les troubles de la thyroïde à blain 44 ou en visio`,
    canonical: 'https://www.bien-avec-sa-thyroide.com/hypothyroidie',
    enabled: true,
  },
  {
    type: 'hashimoto',
    title: 'Hashimoto',
    name: 'Hashimoto',
    imagePath: 'https://www.bien-avec-sa-thyroide.com/assets/img/logo.png',
    description: `Vous avez envie de prendre soin de vous, de prendre en charge votre santé et votre bien-être ou de (re)devenir acteur de votre santé ? Alors, il se pourrait bien que vous soyez au bon endroit ! Je suis Céline Chrabie Naturopathe spécialisée dans les troubles de la thyroïde à blain 44 ou en visio`,
    canonical: 'https://www.bien-avec-sa-thyroide.com/hashimoto',
    enabled: true,
  },
  // {
  //   type: 'rendez-vous',
  //   title: 'Prendre rendez-vous',
  //   name: 'Rendez-vous',
  //   imagePath: 'https://www.bien-avec-sa-thyroide.com/assets/img/logo.png',
  //   description: 'Prendre rendez-vous',
  //   canonical: 'https://www.bien-avec-sa-thyroide.com/rendez-vous',
  //   enabled: false,
  // },
  {
    type: 'contact',
    title: 'Contact et Tarifs',
    name: 'Contact et Tarifs',
    imagePath: 'https://www.bien-avec-sa-thyroide.com/assets/img/logo.png',
    description: `Vous avez envie de prendre soin de vous, de prendre en charge votre santé et votre bien-être ou de (re)devenir acteur de votre santé ? Alors, il se pourrait bien que vous soyez au bon endroit ! Je suis Céline Chrabie Naturopathe spécialisée dans les troubles de la thyroïde à blain 44 ou en visio`,
    canonical: 'https://www.bien-avec-sa-thyroide.com/contact',
    enabled: true,
  },
  {
    type: 'e-book',
    title: 'E-book',
    name: 'E-book',
    imagePath: 'https://www.bien-avec-sa-thyroide.com/assets/img/logo.png',
    description: `Vous avez envie de prendre soin de vous, de prendre en charge votre santé et votre bien-être ou de (re)devenir acteur de votre santé ? Alors, il se pourrait bien que vous soyez au bon endroit ! Je suis Céline Chrabie Naturopathe spécialisée dans les troubles de la thyroïde à blain 44 ou en visio`,
    canonical: 'https://www.bien-avec-sa-thyroide.com/e-book',
    enabled: false,
  },
  {
    type: 'mentions-legales',
    title: 'Mentions légales',
    name: 'Mentions légales',
    imagePath: 'https://www.bien-avec-sa-thyroide.com/assets/img/logo.png',
    description: `Vous avez envie de prendre soin de vous, de prendre en charge votre santé et votre bien-être ou de (re)devenir acteur de votre santé ? Alors, il se pourrait bien que vous soyez au bon endroit ! Je suis Céline Chrabie Naturopathe spécialisée dans les troubles de la thyroïde à blain 44 ou en visio`,
    canonical: 'https://www.bien-avec-sa-thyroide.com/mentions-legales',
    enabled: false,
  },
  {
    type: 'politique-de-confidentialite',
    title: 'Politique de confidentialité',
    name: 'Politique de confidentialité',
    imagePath: 'https://www.bien-avec-sa-thyroide.com/assets/img/logo.png',
    description: `Vous avez envie de prendre soin de vous, de prendre en charge votre santé et votre bien-être ou de (re)devenir acteur de votre santé ? Alors, il se pourrait bien que vous soyez au bon endroit ! Je suis Céline Chrabie Naturopathe spécialisée dans les troubles de la thyroïde à blain 44 ou en visio`,
    canonical: 'https://www.bien-avec-sa-thyroide.com/politique-de-confidentialite',
    enabled: false,
  },
  {
    type: 'accessibilite',
    title: 'Accessibilité',
    name: 'Accessibilité',
    imagePath: 'https://www.bien-avec-sa-thyroide.com/assets/img/logo.png',
    description: `Vous avez envie de prendre soin de vous, de prendre en charge votre santé et votre bien-être ou de (re)devenir acteur de votre santé ? Alors, il se pourrait bien que vous soyez au bon endroit ! Je suis Céline Chrabie Naturopathe spécialisée dans les troubles de la thyroïde à blain 44 ou en visio`,
    canonical: 'https://www.bien-avec-sa-thyroide.com/accessibilite',
    enabled: false,
  },
  // {
  //   type: 'votre-naturopathe-a',
  //   title: 'Votre naturopathe à ',
  //   name: 'Votre naturopathe à ',
  //   imagePath: 'https://www.bien-avec-sa-thyroide.com/assets/img/logo.png',
  //   description: 'Votre naturopathe à ',
  //   canonical: 'https://www.bien-avec-sa-thyroide.com/votre-naturopathe-a',
  //   enabled: false,
  // },
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

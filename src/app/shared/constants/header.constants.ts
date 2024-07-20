import {Header, Link} from '../models';

export const headers: Header[] = [
  {
    type: '/',
    title: 'Naturopathe spécialiste de la thyroïde',
    name: 'Accueil',
    imagePath: 'https://www.bien-avec-sa-thyroide.com/assets/img/logo.png',
    description: `Prenez soin de votre thyroïde avec Céline Chrabie, naturopathe à Blain (44) et en visio. Spécialisée en hypothyroïdie et Hashimoto, pour une santé naturelle et équilibrée.`,
    canonical: 'https://www.bien-avec-sa-thyroide.com',
    enabled: true,
  },
  {
    type: '/a-propos',
    title: 'A propos de moi',
    name: 'A propos',
    imagePath: 'https://www.bien-avec-sa-thyroide.com/assets/img/logo.png',
    description:
      "Céline, naturopathe à Blain et en visio, optimise le fonctionnement de votre thyroïde pour retrouver un confort de vie. Accompagnement personnalisé et bien-être naturel.",
    canonical: 'https://www.bien-avec-sa-thyroide.com/a-propos',
    enabled: true,
  },
  {
    type: '/hypothyroidie',
    title: 'Hypothyroïdie',
    name: 'Hypothyroïdie',
    imagePath: 'https://www.bien-avec-sa-thyroide.com/assets/img/logo.png',
    description: `Céline, naturopathe à Blain et en visio, découvrez comment je peux vous aider à gérer l'hypothyroïdie pour améliorer votre santé et bien-être avec des méthodes naturelles grace à la Naturopathie.`,
    canonical: 'https://www.bien-avec-sa-thyroide.com/hypothyroidie',
    enabled: true,
  },
  {
    type: '/hashimoto',
    title: 'Hashimoto',
    name: 'Hashimoto',
    imagePath: 'https://www.bien-avec-sa-thyroide.com/assets/img/logo.png',
    description: `Céline, naturopathe à Blain et en visio, je vous accompagne dans la gestion de la thyroïdite de Hashimoto pour améliorer votre bien-être avec des solutions naturelles.`,
    canonical: 'https://www.bien-avec-sa-thyroide.com/hashimoto',
    enabled: true,
  },
  {
    type: '/contact',
    title: 'Contact et Tarifs',
    name: 'Contact et Tarifs',
    imagePath: 'https://www.bien-avec-sa-thyroide.com/assets/img/logo.png',
    description: `Contactez Céline, naturopathe à Blain et en visio, pour des consultations en thyroïde. Découvrez nos tarifs adaptés pour un accompagnement personnalisé.`,
    canonical: 'https://www.bien-avec-sa-thyroide.com/contact',
    enabled: true,
  },
  {
    type: '/e-books',
    title: 'Mes E-books',
    name: 'E-books',
    imagePath: 'https://www.bien-avec-sa-thyroide.com/assets/img/logo.png',
    description: `Découvrez les e-books de Céline Chrabie sur la thyroïde. Guides pratiques pour comprendre et gérer votre maladie.`,
    canonical: 'https://www.bien-avec-sa-thyroide.com/e-books',
    enabled: false,
  },
  {
    type: '/e-books/hashimoto-comment-dompter-la-maladie',
    title: 'Hashimoto - Comment dompter la maladie',
    name: 'E-books',
    imagePath: 'https://www.bien-avec-sa-thyroide.com/assets/img/logo.png',
    description: `Découvrez l'e-book de Céline Chrabie "Hashimoto : Comment dompter la maladie" pour des conseils pratiques et améliorer votre bien-être.`,
    canonical: 'https://www.bien-avec-sa-thyroide.com/e-books/hashimoto-comment-dompter-la-maladie',
    enabled: false,
  },
  {
    type: '/e-books/prendre-soin-de-sa-thyroide',
    title: 'Prendre soin de sa thyroïde',
    name: 'E-books',
    imagePath: 'https://www.bien-avec-sa-thyroide.com/assets/img/logo.png',
    description: `prendre-soin-de-sa-thyroide.`,
    canonical: 'https://www.bien-avec-sa-thyroide.com/e-books/prendre-soin-de-sa-thyroide',
    enabled: false,
  },
  {
    type: '/mentions-legales',
    title: 'Mentions légales',
    name: 'Mentions légales',
    imagePath: 'https://www.bien-avec-sa-thyroide.com/assets/img/logo.png',
    description: `Consultez les mentions légales de Céline Chrabie Naturopathe pour connaître les informations légales et réglementaires de notre site.`,
    canonical: 'https://www.bien-avec-sa-thyroide.com/mentions-legales',
    enabled: false,
  },
  {
    type: '/politique-de-confidentialite',
    title: 'Politique de confidentialité',
    name: 'Politique de confidentialité',
    imagePath: 'https://www.bien-avec-sa-thyroide.com/assets/img/logo.png',
    description: `Découvrez la politique de confidentialité de Céline Chrabie Naturopathe pour comprendre comment nous protégeons vos données personnelles`,
    canonical: 'https://www.bien-avec-sa-thyroide.com/politique-de-confidentialite',
    enabled: false,
  },
  {
    type: '/accessibilite',
    title: 'Accessibilité',
    name: 'Accessibilité',
    imagePath: 'https://www.bien-avec-sa-thyroide.com/assets/img/logo.png',
    description: `Consultez notre politique d'accessibilité pour savoir nous assurons l'accès et l'inclusivité du site pour tous les utilisateurs et toutes les utilisatrices.`,
    canonical: 'https://www.bien-avec-sa-thyroide.com/accessibilite',
    enabled: false,
  },
];

export function getHeaderByType(type: string): Header {
  return headers.find((header) => header.type === type) || headers[0]
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

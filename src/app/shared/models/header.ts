import { Link } from './link';

export interface Header extends Link {
  imagePath: string;
  description: string;
  canonical: string;
}

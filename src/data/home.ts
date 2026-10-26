/**
 * Home: full-screen slideshow like the source. The 5 slides use real tìlde studio photos
 * (project covers). SEO texts (title/description/H1) are the studio's.
 */
import { type Img } from '../lib/media';

const slide = (src: string, width: number, height: number, alt: string): Img => ({ src, width, height, alt });

export const home = {
  /** <title> della home (~55-60 caratteri, con città per il locale) */
  title: 'Architecture studio in Modena | tìlde studio',
  /** meta description (140-160 caratteri, attività + città) */
  description: 'tìlde studio, architecture between Modena and Seville: design, public spaces, renovations, interiors and installations across Italy and Spain.',
  /** H1 della home (per il SEO). Visibile solo agli screen reader/crawler per non alterare il look. */
  h1: 'Architecture studio in Modena — tìlde studio',
  slides: [
    slide('/img/tilde/hero/1.webp', 2500, 1767, 'TRAMA — theatre and auditorium, Pego (Spain)'),
    slide('/img/tilde/hero/2.webp', 2500, 1667, 'Terraplèn — blind walls, Barcelona (Spain)'),
    slide('/img/tilde/hero/3.webp', 2500, 2002, 'Óptica Hemera — retail space, Badajoz (Spain)'),
    slide('/img/tilde/hero/4.webp', 2480, 2839, 'TRAMA — Teatre Municipal, Pego (Spain)'),
    slide('/img/tilde/hero/5.webp', 2500, 2188, 'A viva voce! — temporary pavilion, Rome (Italy)'),
  ],
};

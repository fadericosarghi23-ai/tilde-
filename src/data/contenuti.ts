/**
 * Page assets not tied to projects/studio: the contact page opening photo and the default
 * Open Graph image (social preview). Real tìlde studio photos.
 */
import { type Img } from '../lib/media';

/** Contact page opening photo (real project photo) */
export const contactHero: Img = { src: '/img/tilde/optica-hemera/f2.webp', width: 1500, height: 1201, alt: 'tìlde studio — project view (Óptica Hemera)' };

/** Default Open Graph image (social preview). Real project photo. */
export const ogImage: Img = { src: '/img/tilde/terraplen/f2.webp', width: 1500, height: 1000, alt: 'tìlde studio — architecture between Modena and Seville' };

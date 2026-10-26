/**
 * Projects (works) by tìlde studio — FULL list (32) like the source "projects" page, for a compact
 * index. The 8 projects with a `slug` have a detail page with real PHOTOS and DRAWINGS
 * (public/img/tilde/<slug>/f*.webp = photos, d*.webp = drawings), shown in two columns.
 * DA VERIFICARE with the studio: client and team of the detailed projects (not public); detail
 * descriptions are editorial copy.
 */
import { type Img } from '../lib/media';

export type Progetto = {
  titolo: string;
  tipo: string;
  luogo: string;
  anno: string;
  nota?: string;
  slug?: string;
  // ── Detail fields (only for projects with a slug) ──
  cliente?: string;
  destinazione?: string;
  intervento?: string;
  stato?: string;
  team?: string;
  descrizione?: string;
  thumb?: Img;
  hero?: Img;
  foto?: Img[];
  disegni?: Img[];
};

const im = (src: string, width: number, height: number, alt: string, drawing = false): Img => ({ src, width, height, alt, drawing });
/** Build an image list from [w,h] specs: <slug>/<kind><n>.webp */
const imgs = (slug: string, kind: 'f' | 'd', specs: [number, number][], alt: string, drawing = false): Img[] =>
  specs.map((s, i) => im(`/img/tilde/${slug}/${kind}${i + 1}.webp`, s[0], s[1], `${alt} — ${drawing ? 'drawing' : 'photo'} ${i + 1}`, drawing));

export const progetti: Progetto[] = [
  {
    titolo: 'TRAMA', tipo: 'Competition · Theatre and auditorium', luogo: 'Pego, Spain', anno: '2025',
    slug: 'trama',
    cliente: 'Public competition', // DA VERIFICARE
    destinazione: 'Theatre and auditorium', intervento: 'Design competition', stato: 'Competition design',
    team: 'tìlde studio', // DA VERIFICARE
    descrizione:
      'Proposal for a new theatre and auditorium in Pego, Spain, developed for a competition. The project weaves together public space and hall, working on the relationship between the building and the surrounding urban fabric.',
    thumb: im('/img/tilde/trama/f1.webp', 1500, 1698, 'TRAMA, theatre and auditorium in Pego — exterior view'),
    hero: im('/img/tilde/trama/f1.webp', 1500, 1698, 'TRAMA, theatre and auditorium in Pego — exterior view'),
    foto: imgs('trama', 'f', [[1500, 1698], [1500, 1717], [1500, 1060], [1500, 1252]], 'TRAMA'),
    disegni: imgs('trama', 'd', [[1500, 2169], [1500, 404], [1500, 555], [1500, 577]], 'TRAMA', true),
  },
  { titolo: 'Fet d’Aigua', tipo: 'Temporary pavilion', luogo: 'Alicante, Spain', anno: '2025', nota: 'TAC! 25 (mention)' },
  {
    titolo: 'Terraplèn', tipo: 'Façade', luogo: 'Barcelona, Spain', anno: '2024 – ongoing', nota: '10 Blind walls (1st prize)',
    slug: 'terraplen',
    cliente: 'Competition organizer', // DA VERIFICARE
    destinazione: 'Façade / blind wall', intervento: '“10 Blind walls” competition — 1st prize', stato: 'Ongoing',
    team: 'tìlde studio', // DA VERIFICARE
    descrizione:
      'Winning entry (1st prize) of the “10 Blind walls” competition for the renewal of Barcelona\'s blind walls. A façade intervention that turns an anonymous wall into an element of the urban landscape.',
    thumb: im('/img/tilde/terraplen/f1.webp', 1500, 1826, 'Terraplèn, Barcelona — façade view'),
    hero: im('/img/tilde/terraplen/f1.webp', 1500, 1826, 'Terraplèn, Barcelona — façade view'),
    foto: imgs('terraplen', 'f', [[1500, 1826], [1500, 1000]], 'Terraplèn'),
    disegni: imgs('terraplen', 'd', [[1500, 1379], [1500, 688], [1500, 1186], [1500, 1805]], 'Terraplèn', true),
  },
  { titolo: 'Escola Salvador Vilarrassa', tipo: 'Competition · School', luogo: 'Besalú, Spain', anno: '2025' },
  {
    titolo: 'Volume UNO', tipo: 'Private house · Renovation', luogo: 'Modena, Italy', anno: '2025 – 2026', nota: 'built',
    slug: 'volume-uno',
    cliente: 'Private', // DA VERIFICARE
    destinazione: 'Private house', intervento: 'Renovation', stato: 'Built',
    team: 'tìlde studio', // DA VERIFICARE
    descrizione:
      'Renovation of a private house in Modena. The project reorganises the domestic spaces around a recognisable volume, caring for natural light, material and the proportions of the rooms.',
    thumb: im('/img/tilde/volume-uno/f1.webp', 1500, 2250, 'Volume UNO, Modena — interior'),
    hero: im('/img/tilde/volume-uno/f1.webp', 1500, 2250, 'Volume UNO, Modena — interior'),
    foto: imgs('volume-uno', 'f', [[1500, 2250], [1500, 2250], [1500, 2250], [1500, 2250]], 'Volume UNO'),
    disegni: [],
  },
  {
    titolo: 'Terrace w/ House', tipo: 'Private house · Renovation', luogo: 'Modena, Italy', anno: '2023 – 2025', nota: 'built',
    slug: 'terrace-with-house',
    cliente: 'Private', // DA VERIFICARE
    destinazione: 'Private house', intervento: 'Renovation', stato: 'Built',
    team: 'tìlde studio', // DA VERIFICARE
    descrizione:
      'Renovation of a home in Modena where the terrace becomes the heart of the project. The relationship between inside and outside redefines the way the house is lived in.',
    thumb: im('/img/tilde/terrace-with-house/f1.webp', 1500, 1876, 'Terrace w/ House, Modena — interior'),
    hero: im('/img/tilde/terrace-with-house/f1.webp', 1500, 1876, 'Terrace w/ House, Modena — interior'),
    foto: imgs('terrace-with-house', 'f', [[1500, 1876], [1500, 1876], [1500, 1501], [1500, 1875], [1500, 1500], [1500, 1875], [1500, 1501]], 'Terrace w/ House'),
    disegni: [],
  },
  { titolo: 'Contrapunto', tipo: 'Competition · Public spaces', luogo: 'Chueca, Spain', anno: '2025' },
  { titolo: 'Paisaje Des(h)echo', tipo: 'Temporary pavilion', luogo: 'Logroño, Spain', anno: '2025', nota: 'Concéntrico 11 (finalist)' },
  { titolo: 'Casa AD', tipo: 'Private house · Renovation', luogo: 'Modena, Italy', anno: '2025 – ongoing' },
  { titolo: 'Blu /Azul', tipo: 'Exhibition · El cuarto lúcido', luogo: 'Granada, Spain', anno: '2025' },
  {
    titolo: 'Óptica Hemera', tipo: 'Optics and retail · Renovation', luogo: 'Badajoz, Spain', anno: '2025', nota: 'built',
    slug: 'optica-hemera',
    cliente: 'Private', // DA VERIFICARE
    destinazione: 'Optics and retail', intervento: 'Retail renovation', stato: 'Built',
    team: 'tìlde studio', // DA VERIFICARE
    descrizione:
      'A new space for an optician in Badajoz, Spain. The retail project builds the shop\'s identity through light, bespoke displays and an essential design of the sales space.',
    thumb: im('/img/tilde/optica-hemera/f1.webp', 1500, 2000, 'Óptica Hemera, Badajoz — sales space'),
    hero: im('/img/tilde/optica-hemera/f1.webp', 1500, 2000, 'Óptica Hemera, Badajoz — sales space'),
    foto: imgs('optica-hemera', 'f', [[1500, 2000], [1500, 1201], [1500, 2063], [1152, 1788]], 'Óptica Hemera'),
    disegni: imgs('optica-hemera', 'd', [[1500, 1594], [1500, 1790]], 'Óptica Hemera', true),
  },
  {
    titolo: 'A viva voce!', tipo: 'Temporary pavilion · FAR Roma', luogo: 'Rome, Italy', anno: '2024',
    slug: 'a-viva-voce',
    cliente: 'FAR Roma', // DA VERIFICARE
    destinazione: 'Temporary pavilion', intervento: 'Ephemeral installation — FAR Roma', stato: 'Built',
    team: 'tìlde studio', // DA VERIFICARE
    descrizione:
      'Temporary pavilion built for FAR Roma. An ephemeral installation conceived as a device for meeting and listening in public space.',
    thumb: im('/img/tilde/a-viva-voce/f1.webp', 1500, 1313, 'A viva voce!, Rome — view of the pavilion'),
    hero: im('/img/tilde/a-viva-voce/f1.webp', 1500, 1313, 'A viva voce!, Rome — view of the pavilion'),
    foto: imgs('a-viva-voce', 'f', [[1500, 1313]], 'A viva voce!'),
    disegni: imgs('a-viva-voce', 'd', [[1500, 862], [1081, 2074], [842, 1870], [1081, 2134], [1303, 1294], [1157, 1364], [1379, 1489], [1303, 1487], [1324, 1571]], 'A viva voce!', true),
  },
  { titolo: 'Piazzetta de Giorgi', tipo: 'Competition · Public spaces', luogo: 'Cesa di Caserta, Italy', anno: '2024', nota: '4th prize' },
  { titolo: 'Agricultural HUB', tipo: 'Competition · Agricultural Research HUB', luogo: 'Rionero, Italy', anno: '2024' },
  { titolo: 'Av. Tibidabo, 39-41', tipo: 'Competition · Offices', luogo: 'Barcelona, Spain', anno: '2024' },
  { titolo: 'Studiolo', tipo: 'Office', luogo: 'Formigine, Italy', anno: '2025' },
  { titolo: 'Piazza San Domenico', tipo: 'Competition · Public spaces', luogo: 'Sora, Italy', anno: '2024 – 2026', nota: '1st prize' },
  { titolo: 'Sant’Agata ex convent', tipo: 'Competition · Tourist and cultural HUB', luogo: 'Catania, Italy', anno: '2024' },
  { titolo: 'Fragmentos', tipo: 'Exhibition · El cuarto lúcido', luogo: 'Granada, Spain', anno: '2023' },
  { titolo: 'Boulevard della pietra', tipo: 'Competition · Public spaces', luogo: 'Bagnolo Piemonte, Italy', anno: '2024' },
  { titolo: 'Flùttuo', tipo: 'Temporary pavilion · FAR Roma', luogo: 'Rome, Italy', anno: '2024' },
  { titolo: 'Casa E', tipo: 'Private house · Renovation', luogo: 'Bologna, Italy', anno: '2024 – ongoing' },
  {
    titolo: 'Selective Upgrade', tipo: 'Private house · Renovation', luogo: 'Mirandola (MO), Italy', anno: '2024', nota: 'built',
    slug: 'selective-upgrade',
    cliente: 'Private', // DA VERIFICARE
    destinazione: 'Private house', intervento: 'Renovation', stato: 'Built',
    team: 'tìlde studio', // DA VERIFICARE
    descrizione:
      'Selective renovation of a home in Mirandola, near Modena. Targeted interventions renew the main rooms — starting from the kitchen — without disrupting the existing layout of the house.',
    thumb: im('/img/tilde/selective-upgrade/f1.webp', 853, 1280, 'Selective Upgrade, Mirandola — kitchen'),
    hero: im('/img/tilde/selective-upgrade/f1.webp', 853, 1280, 'Selective Upgrade, Mirandola — kitchen'),
    foto: imgs('selective-upgrade', 'f', [[853, 1280], [1500, 2000], [1500, 2347], [1500, 2000], [1500, 2000]], 'Selective Upgrade'),
    disegni: [],
  },
  {
    titolo: 'Public housing archive', tipo: 'Competition · Archive', luogo: 'Bologna, Italy', anno: '2023 – 2026', nota: '1st prize',
    slug: 'public-housing-archive',
    cliente: 'Competition organizer', // DA VERIFICARE
    destinazione: 'Archive', intervento: 'Design competition — 1st prize', stato: 'Ongoing',
    team: 'tìlde studio', // DA VERIFICARE
    descrizione:
      'Winning entry for an archive dedicated to public housing in Bologna. The space gathers and makes accessible the memory of the city\'s social housing.',
    thumb: im('/img/tilde/public-housing-archive/f1.webp', 1500, 1500, 'Public housing archive, Bologna — competition view'),
    hero: im('/img/tilde/public-housing-archive/f1.webp', 1500, 1500, 'Public housing archive, Bologna — competition view'),
    foto: imgs('public-housing-archive', 'f', [[1500, 1500], [1500, 1981], [1500, 1500]], 'Public housing archive'),
    disegni: [],
  },
  { titolo: '¡A escena!', tipo: 'Temporary pavilion', luogo: 'Logroño, Spain', anno: '2023', nota: 'Concéntrico 09 (finalist)' },
  { titolo: 'Piazza Martiri', tipo: 'Competition · Public spaces', luogo: 'San Piero in Bagno, Italy', anno: '2022' },
  { titolo: 'Biscione', tipo: 'Competition · Housing and public spaces', luogo: 'Carpi, Italy', anno: '2022', nota: '2nd prize' },
  { titolo: 'Casa C', tipo: 'Private house · Renovation', luogo: 'Modena, Italy', anno: '2022', nota: 'built' },
  { titolo: 'Cuniola gardens', tipo: 'Competition · Public spaces', luogo: 'Ferrara, Italy', anno: '2021' },
  { titolo: 'A linha de sombra', tipo: 'Competition · Winery and Hotel', luogo: 'Monte d’Oiro, Lisbon, Portugal', anno: '2021', nota: 'finalist' },
  { titolo: 'Horse museum', tipo: 'Competition · Museum', luogo: 'Omuli, Latvia', anno: '2021', nota: 'finalist' },
  { titolo: 'Arboleda', tipo: 'Temporary pavilion', luogo: 'Logroño, Spain', anno: '2022', nota: 'Concéntrico 08 (finalist)' },
];

// Copertina (solo per l'hover dell'indice) per i progetti senza pagina di dettaglio.
// Piazza San Domenico non ha immagini sul sorgente → resta senza foto.
const covers: Record<string, string> = {
  'Fet d’Aigua': 'fet-daigua', 'Escola Salvador Vilarrassa': 'escola', 'Contrapunto': 'contrapunto',
  'Paisaje Des(h)echo': 'paisaje', 'Casa AD': 'casa-ad', 'Blu /Azul': 'blu-azul',
  'Piazzetta de Giorgi': 'piazzetta-de-giorgi', 'Agricultural HUB': 'agricultural-hub', 'Av. Tibidabo, 39-41': 'av-tibidabo',
  'Studiolo': 'studiolo', 'Sant’Agata ex convent': 'santagata', 'Fragmentos': 'fragmentos',
  'Boulevard della pietra': 'boulevard', 'Flùttuo': 'fluttuo', 'Casa E': 'casa-e',
  '¡A escena!': 'a-escena', 'Piazza Martiri': 'piazza-martiri', 'Biscione': 'biscione',
  'Casa C': 'casa-c', 'Cuniola gardens': 'cuniola', 'A linha de sombra': 'a-linha',
  'Horse museum': 'horse-museum', 'Arboleda': 'arboleda',
};
for (const p of progetti) {
  if (!p.thumb && covers[p.titolo]) {
    p.thumb = im(`/img/tilde/covers/${covers[p.titolo]}.webp`, 1500, 1000, `${p.titolo} — cover`);
  }
}

/** Only the projects with a detail page (have a slug and photos). */
export const progettiConDettaglio = progetti.filter((p): p is Progetto & { slug: string } => Boolean(p.slug));
export const getProgetto = (slug: string) => progetti.find((p) => p.slug === slug);

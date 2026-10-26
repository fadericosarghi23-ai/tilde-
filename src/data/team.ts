/**
 * Studio (about): intro, manifesto, founders (photo + bio), collaborators, awards and press.
 * `team` (the founders) also feeds the JSON-LD employee in Layout.astro. Real tìlde studio content.
 */
import { type Img } from '../lib/media';

/** Intro paragraph (indexable text, important for SEO) */
export const studioIntro =
  'tìlde is a co-founded architectural practice with offices in Modena and Seville. We work on architectural design, public spaces, renovations, interiors and installations, between competitions and built works across Italy and Spain.';

/** Studio manifesto (the source\'s "We seek synergies…") */
export const studioStatement =
  'We seek synergies between professionals from different fields, aiming to spark a constantly evolving and self-sustaining creative process.';

export type Persona = { id: string; nome: string; ruolo: string; bio: string; foto: Img };

/** Founders: shown with bio and used in the JSON-LD (Person employee). Real photos from the source. */
export const fondatori: Persona[] = [
  {
    id: 'pedro-escoriza-torralbo', nome: 'Pedro Escoriza Torralbo', ruolo: 'Architect — OAMi 21586',
    bio: 'Graduated with honors at Politecnico di Milano in 2019, obtaining a special mention in the “Neolaureati” Award of the Ordine degli Architetti di Milano, and his professional license in 2020. He graduated in building engineering at the Universidad de Granada in 2015 and has worked at architectural firms in Milan. In 2022 he obtained a three-year research fellowship at Politecnico di Milano and has collaborated in several courses and workshops as an assistant.',
    foto: { src: '/img/tilde/studio/pedro.webp', width: 684, height: 612, alt: 'Pedro Escoriza Torralbo — tìlde studio' },
  },
  {
    id: 'renato-righi', nome: 'Renato Righi', ruolo: 'Architect — OAMi 22101',
    bio: 'Graduated with honors from the Politecnico di Milano in 2020 and obtained his professional license in 2022. He has worked with architecture firms in both Milan and Barcelona, and he continues to collaborate with the Politecnico di Milano as a teaching assistant in third- and fourth-year design courses.',
    foto: { src: '/img/tilde/studio/renato.webp', width: 1000, height: 1000, alt: 'Renato Righi — tìlde studio' },
  },
];

/** Collaborators / "People": the multidisciplinary network, like the source list. */
export const collaboratori: string[] = [
  'Matteo D’Angelo (Photographer)',
  'Giacomo Goldoni (Photographer)',
  'Francesco Isolani (Architect)',
  'Borja Morillo Heatley (Musician)',
  'Alessia Palermo (Psychologist)',
  'Elena Ogliani (Architect)',
  'Valerio Poltrini (Architect)',
  'Inés Pich (Journalist and Writer)',
  'Pietro Reginella (3d Artist)',
  'Valeria Righetti (Architect)',
  'Samuele Silvestri (Architect)',
  'Federico Tavella (3d Artist)',
];

/** Former collaborators (optional). Empty = hidden. */
export const hannoCollaborato: string[] = [];

/** Press: real mentions of the studio, with the real article links taken from the "practice" page. */
export type Stampa = { fonte: string; titolo: string; data: string; href: string };
export const stampa: Stampa[] = [
  { fonte: 'tacfestival.com', titolo: 'Ganadores 2025', data: '2025', href: 'https://tacfestival.com/ganadores-2025/#alicante' },
  { fonte: 'concentrico.es', titolo: 'Winners of calls for proposals', data: '02.2025', href: 'https://concentrico.es/en/calls-for-proposals-24-25/' },
  { fonte: 'polimi.it', titolo: 'Milan–Porto Exchange. Consonance of traditions and common challenges', data: '12.2024', href: 'https://www.polimi.it/fileadmin/user_upload/master_corsi_perfezionamento/ID_458_Seminario_Formazione_Continua.pdf' },
  { fonte: 'barcelona.cat', titolo: 'International Ideas Competition for young architects', data: '09.2024', href: 'https://www.barcelona.cat/capitalmundialarquitectura/en/international-ideas-competition-young-architects/panta-de-tremp' },
  { fonte: 'spanish-architects.com', titolo: 'Concurso 10 Medianeras, anunciados los ganadores', data: '10.2024', href: 'https://www.spanish-architects.com/es/architecture-news/destacados/concurso-10-medianeras-anunciados-los-ganadores' },
  { fonte: '20minutos.es', titolo: 'Así quedarán las 17 paredes medianeras que se embellecerán en Barcelona', data: '10.2024', href: 'https://www.20minutos.es/noticia/5640225/0/asi-quedaran-las-17-paredes-medianeras-que-se-embelleceran-barcelona-con-las-propuestas-ganadoras/' },
  { fonte: 'lavanguardia.com', titolo: 'De jardines verticales a ventanas y balcones', data: '10.2024', href: 'https://www.lavanguardia.com/local/barcelona/20241003/9993365/jardines-verticales-ventanas-balcones-asi-transformara-barcelona-17-paredes-medianeras.html' },
  { fonte: 'artribune.com', titolo: 'A Bologna nascerà il Museo della Casa Popolare', data: '02.2023', href: 'https://www.artribune.com/progettazione/architettura/2023/02/bologna-museo-della-casa-popolare/' },
  { fonte: 'zero.eu', titolo: 'Ecco come sarà il MUCAP, Museo della Casa Popolare in Bolognina', data: '02.2023', href: 'https://zero.eu/en/news/ecco-come-sara-il-mucap-museo-della-casa-popolare-in-bolognina/' },
  { fonte: 'ansa.it', titolo: 'Alla Bolognina nasce Mucap, museo della Casa Popolare', data: '02.2023', href: 'https://www.ansa.it/canale_lifestyle/notizie/design_giardino/2023/02/10/alla-bolognina-nasce-mucap-museo-della-casa-popolare_78466f30-3ece-4e8b-846e-026b4cae702e.html' },
  { fonte: 'ordinearchitetti.mi.it', titolo: 'Premio Neolaureati 2020, la mostra', data: '07.2021', href: 'https://ordinearchitetti.mi.it/it/eventi/premio-neolaureati-2020-la-mostra' },
  { fonte: 'adfwebmagazine.jp', titolo: 'Winners of the Best Graduates Award 2020 of the Polytechnic University of Milan', data: '12.2020', href: 'https://www.adfwebmagazine.jp/en/architect/premio-neolaureati-winners-2020-of-the-polytechnic-university-of-milan/' },
];

/** Founders\' academic awards (from the bios). Competition prizes are derived from the projects. */
export type Premio = { titolo: string; ente: string; anno: string };
export const premiAccademici: Premio[] = [
  { titolo: '“Neolaureati” Award 2020 — special mention', ente: 'Ordine degli Architetti di Milano', anno: '2020' },
  { titolo: 'Best Graduates Award 2020', ente: 'Politecnico di Milano', anno: '2020' },
];

/** Alias for the JSON-LD employee in Layout.astro */
export const team = fondatori;

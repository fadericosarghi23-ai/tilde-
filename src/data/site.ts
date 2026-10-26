/**
 * IDENTITÀ DEL CLIENTE + FONDAMENTA SEO/GEO — unico punto da cui header, footer, contatti,
 * JSON-LD, meta, privacy, cookie, robots e llms.txt leggono i dati dello studio.
 *
 * Sito tìlde studio — compilato dai dati pubblici di tildestudio.eu (vedi note DA VERIFICARE per i
 * dati non pubblicati). I campi sono predisposti per il posizionamento locale (GEO): NAP, coordinate,
 * aree servite, orari, competenze. Le FOTO restano segnaposto finché non arrivano gli originali.
 *
 * REGOLA SEO/GEO: nome, città e indirizzo devono essere IDENTICI qui, su Google Business Profile
 * e sulle directory (NAP coerente = segnale locale forte).
 */

export const site = {
  /** Nome breve usato ovunque (title, header, footer, JSON-LD). Dev'essere identico a Google Business Profile. */
  nome: 'tìlde studio',
  /** Denominazione completa/ragione sociale (JSON-LD legalName, privacy). Vuota = non resa. */
  // DA VERIFICARE: ragione sociale/forma giuridica non pubblica sul sito — finché vuota non è resa.
  ragioneSociale: '',
  /** Varianti del nome (JSON-LD alternateName) */
  nomiAlternativi: ['tìlde', 'tilde studio'],
  /** Alt del logo: nome + disciplina */
  logoAlt: 'tìlde studio — architecture studio',
  /** Tipo di attività in 2-4 parole, usato in eyebrow e meta (con la città aiuta il SEO locale) */
  attivita: 'Architecture studio',
  /** Slogan breve (JSON-LD slogan, footer) */
  slogan: 'Architecture as a shared process',
  /** Descrizione in 1 frase (meta description di default, JSON-LD, llms.txt). Metti attività + città per il locale. */
  descrizione:
    'tìlde is an architecture studio based in Modena and Seville: design, public spaces, renovations and installations across Italy and Spain.',
  /** Frase del footer sotto il logo (claim breve sotto il nome dello studio) */
  footerClaim: 'Spaces in evolution',

  // ── Dominio e tecnici ───────────────────────────────────────────────
  /** Dominio canonico SENZA slash finale: è il `site` di astro.config.mjs (su Netlify, l'URL del sito) */
  dominio: String(import.meta.env.SITE).replace(/\/$/, ''),
  /** Colore della barra del browser: deve coincidere con --ink in global.css */
  themeColor: '#0a0a0a',
  /** Codice ISO regione/provincia per meta geo.region (Modena = IT-MO). */
  geoRegion: 'IT-MO',

  // ── Contatti (NAP) ──────────────────────────────────────────────────
  email: 'info@tildestudio.eu',
  /** Telefono come si legge a schermo. Vuoto = le righe col telefono non vengono rese. */
  // DA VERIFICARE: nessun telefono pubblicato sul sito — finché vuoto, le righe col telefono non sono rese.
  telefono: '',
  /** Telefono per i link tel: in formato E.164 senza spazi, es. +390212345670 */
  telefonoE164: '',
  /** Cellulare (facoltativo). Vuoto = non reso. */
  cellulare: '',
  cellulareE164: '',
  /** PEC e P.IVA: vuote = non rese. */
  // DA VERIFICARE: PEC e P.IVA non pubbliche sul sito.
  pec: '',
  piva: '',

  // Sede principale (Italia). Seconda sede a Siviglia (Spagna): av. Concejal Alberto Jiménez
  // Becerril n.26, 41009, Sevilla — citata in `ricevimento` e nella pagina contatti.
  indirizzo: {
    via: 'Via Ludovico Castelvetro 5',
    cap: '41124',
    citta: 'Modena',
    provincia: 'MO',
    paese: 'IT',
  },
  /** Zona/quartiere (testo libero per "Dove siamo", utile per il locale) */
  zona: 'Modena and province; projects across Italy and Spain',
  /** Coordinate per la mappa e lo schema geo. null = mappa e meta geo-position nascoste finché non compilate.
   *  DA VERIFICARE: inserire lat/lng esatte della sede di Modena da Google Maps per attivare il geo-schema. */
  geo: null as null | { lat: number; lng: number },
  /** Link "Indicazioni stradali / Apri in Google Maps" */
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Via+Ludovico+Castelvetro+5+41124+Modena',
  /** Modalità/orari di ricevimento (testo libero, pagina contatti) */
  ricevimento: 'By appointment. Offices in Modena (Italy) and Seville (Spain) — av. Concejal Alberto Jiménez Becerril 26, 41009 Seville.',

  /** Orari di apertura per JSON-LD openingHoursSpecification (forte per il SEO locale).
   *  Array vuoto = non reso. days: 0=domenica … 6=sabato. DA VERIFICARE: orari non pubblicati. */
  orari: [] as { days: number[]; opens: string; closes: string }[],

  /** Social: array vuoto = blocco nascosto. icona: 'facebook' | 'instagram' | 'linkedin' */
  social: [
    { nome: 'Instagram', url: 'https://www.instagram.com/tildestudio.eu/', icona: 'instagram' },
  ] as { nome: string; url: string; icona: 'facebook' | 'instagram' | 'linkedin' }[],

  /** Aree servite (JSON-LD areaServed, llms.txt) — città/comuni per il posizionamento locale */
  areeServite: [
    { tipo: 'City', nome: 'Modena' },
    { tipo: 'AdministrativeArea', nome: 'Province of Modena' },
    { tipo: 'AdministrativeArea', nome: 'Emilia-Romagna' },
  ] as { tipo: 'City' | 'AdministrativeArea'; nome: string }[],
  /** Competenze (JSON-LD knowsAbout) — ambiti dello studio, usati anche come keyword */
  competenze: [
    'Architectural design',
    'Public spaces',
    'Architecture competitions',
    'Temporary pavilions',
    'Renovation',
    'Interior design',
    'Retail and installations',
    'Exhibition design',
  ],

  /** Contact form. Uses Netlify Forms: submissions land in the owner's Netlify dashboard after
   *  deploy (no third-party endpoint). Add email notifications from the Netlify Forms settings. */
  form: {
    netlify: true,
    endpoint: '',
    mailto: '',
  },

  /** Analytics/pixel: nessuno nella base (il GTM del sorgente è stato rimosso). */
  analytics: null as null | string,

  /** Anno per il copyright */
  anno: new Date().getFullYear(),
};

export const indirizzoRiga = `${site.indirizzo.via}, ${site.indirizzo.cap} ${site.indirizzo.citta}`;
export const abs = (p: string) => site.dominio + p;

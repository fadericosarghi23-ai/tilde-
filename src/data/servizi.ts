/**
 * Studio fields/services. There is no services page in the source: this list feeds the JSON-LD
 * (hasOfferCatalog) and llms.txt, and works as a keyword set for SEO.
 */
export type Servizio = { id: string; nome: string; breve: string };

// Fields derived from the studio's real work (home/projects of the source). Short descriptions
// are editorial copy: DA VERIFICARE the wording with the studio.
export const servizi: Servizio[] = [
  { id: 'architectural-design', nome: 'Architectural design', breve: 'New-build and renovation projects, from concept to construction.' },
  { id: 'public-spaces', nome: 'Public spaces & competitions', breve: 'Squares and collective spaces developed also through design competitions.' },
  { id: 'temporary-pavilions', nome: 'Temporary pavilions', breve: 'Ephemeral installations and pavilions for festivals and urban spaces.' },
  { id: 'renovation', nome: 'Renovation', breve: 'Renovation of homes and existing spaces, attentive to light, material and proportion.' },
  { id: 'interior-design', nome: 'Interior design', breve: 'Interiors and bespoke furniture designed for everyday life.' },
  { id: 'retail-installations', nome: 'Retail & installations', breve: 'Retail spaces and exhibition set-ups, from identity to construction detail.' },
];

/** llms.txt generated from the data: no text to keep aligned by hand. */
import type { APIRoute } from 'astro';
import { site, abs } from '../data/site';
import { servizi } from '../data/servizi';
import { team } from '../data/team';
import { progetti } from '../data/progetti';

export const GET: APIRoute = () => {
  const righe = [
    `# ${site.nome}`,
    '',
    `> ${site.descrizione}`,
    '',
    '## Key facts',
    '',
    `- Name: ${site.nome}`,
    `- Website: ${abs('/')}`,
    `- Office: ${site.indirizzo.via}, ${site.indirizzo.cap} ${site.indirizzo.citta} (${site.indirizzo.provincia})`,
    ...(site.telefono ? [`- Phone: ${site.telefono}`] : []),
    `- Email: ${site.email}`,
    ...site.social.map((s) => `- ${s.nome}: ${s.url}`),
    `- Areas served: ${site.areeServite.map((a) => a.nome).join(', ')}`,
    `- Studio: ${team.map((m) => `${m.nome} (${m.ruolo})`).join(', ')}`,
    `- Projects: ${progetti.length} published projects`,
    '',
    '## Main pages',
    '',
    `- [Home](${abs('/')}): architecture studio and works.`,
    `- [Projects](${abs('/projects/')}): all the studio's projects.`,
    `- [Studio](${abs('/studio/')}): who we are, approach and people.`,
    `- [Contact](${abs('/contact/')}): address, email, phone and directions.`,
    '',
    '## Fields',
    '',
    ...servizi.map((s) => `- ${s.nome}: ${s.breve}`),
    '',
    '## Projects',
    '',
    ...progetti.map((p) => {
      const label = `${p.tipo}. ${p.luogo}, ${p.anno}${p.nota ? ` (${p.nota})` : ''}.`;
      return p.slug ? `- [${p.titolo}](${abs(`/projects/${p.slug}/`)}): ${label}` : `- ${p.titolo}: ${label}`;
    }),
    '',
  ];
  return new Response(righe.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};

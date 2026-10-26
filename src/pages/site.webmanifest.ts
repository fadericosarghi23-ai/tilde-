import type { APIRoute } from 'astro';
import { site } from '../data/site';

export const GET: APIRoute = () =>
  new Response(
    JSON.stringify(
      {
        name: site.nome,
        short_name: site.nome,
        description: `${site.attivita} in ${site.indirizzo.citta} (${site.indirizzo.provincia})`,
        lang: 'en',
        start_url: '/',
        display: 'browser',
        background_color: '#ffffff',
        theme_color: site.themeColor,
        // DA VERIFICARE: generare icon-192.png e icon-512.png dal logo tìlde (ora usa il favicon SVG).
        icons: [
          { src: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' },
        ],
      },
      null,
      2,
    ),
    { headers: { 'Content-Type': 'application/manifest+json' } },
  );

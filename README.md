# The Cat and the Silver Moon

Landing de anuncio (**próximamente**) para la novela de fantasía de **Nahum F.G.**

- **Título:** The Cat and the Silver Moon  
- **Volumen I:** Un mundo nuevo  
- **Mundo:** Triria  
- **Stack:** Astro + Tailwind · GitHub Pages  

## Desarrollo local

```bash
npm install
npm run dev
```

## Deploy

Push a `main` → GitHub Actions publica en Pages (`base: /silver-moon`).

Activa **Settings → Pages → Source: GitHub Actions** la primera vez.

## Video

Coloca el tráiler optimizado en:

`public/videos/promo-web.mp4`

Poster: `public/images/poster.jpg`

## Galería de escenas

La galería carga dinámicamente las escenas declaradas en:

`public/images/scenes/scenes.json`

Coloca cada fotografía dentro de `public/images/scenes/` y añade una entrada:

```json
[
  {
    "file": "triria-atardecer.jpg",
    "title": "Triria al atardecer",
    "alt": "Paisaje de Triria al atardecer",
    "description": "La ciudad bajo la luz de la luna."
  }
]
```

## Contadores

La página usa GoatCounter para contar visitas y reproducciones del tráiler sin cookies:

- Sitio: `silver-moon.goatcounter.com`
- Ruta de visitas: `/`
- Ruta del tráiler: `/video/promo`

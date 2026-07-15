# AA Expert Solution — Marketing Site

Single-page marketing site for AA Expert Solution, an ironworks, roofing & metal
fabrication company serving Selangor & Kuala Lumpur. Built with
[Astro](https://astro.build), [Tailwind CSS v4](https://tailwindcss.com), and
[daisyui](https://daisyui.com). Deployed to GitHub Pages at
[aaexpertsolution.com](https://www.aaexpertsolution.com).

## Project structure

```text
/
├── public/               # static assets (images, favicon, CNAME, robots.txt)
├── scripts/
│   └── compress.js       # resizes + re-encodes public/ images to webp
├── src/
│   ├── components/       # Nav, Footer
│   ├── content/          # page copy, one file per section (numbered by order)
│   ├── layouts/          # Layout.astro — head, theme tokens, global styles
│   ├── pages/
│   │   └── index.astro   # the whole homepage, section by section
│   └── styles/
│       └── global.css    # Tailwind + daisyui entry point
└── astro.config.mjs
```

Section copy (headlines, service descriptions, FAQ, testimonials, etc.) lives
in `src/content/*.ts`, separate from markup — edit copy there without touching
`index.astro`.

## Commands

All commands run from the project root:

| Command                    | Action                                       |
| :-------------------------- | :-------------------------------------------- |
| `npm install`                | Install dependencies                          |
| `npm run dev`                 | Start local dev server at `localhost:4321`    |
| `npm run build`               | Build production site to `./dist/`            |
| `npm run preview`              | Preview the production build locally          |
| `npm run compress:image`       | Resize + re-encode images in `public/` to webp |

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
site and deploys it to GitHub Pages automatically. The custom domain is
configured via `public/CNAME`.

## Quote form

The "Request a Free Quote" form submits via [Web3Forms](https://web3forms.com).
The access key lives in `src/content/9-quote.ts` (`web3formsAccessKey`) — get
one free at web3forms.com if it ever needs to be rotated.

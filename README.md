# Madhav Pande | Portfolio

Personal portfolio of Madhav Pande, a strategy and analytics professional working in pharma revenue forecasting and large-scale government technology programs.

**Live site:** https://madhavpande.netlify.app

## What's on the site

- **Hero** with a career timeline: EY (Associate Consultant, promoted to Consultant) and Viscadia (Associate)
- **Experience** summary for Viscadia and EY
- **Work Experience** highlights: $1B+ pharma forecast models, reverse forecasting, the State Farmers' Database (20M+ users in 100 days), field UAT, and the Digital Crop Survey across 14 states
- **Education** (Thapar Institute, GMAT Focus 705) and toolkit
- **Beyond the desk:** leadership, volunteering and recognition
- **Contact:** email, LinkedIn and a downloadable resume

Light theme by default, with a dark mode toggle.

## Built with

- [Next.js](https://nextjs.org) (App Router, statically generated) and TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [Motion](https://motion.dev) for entrance animations (respects reduced-motion settings)
- [Phosphor Icons](https://phosphoricons.com)
- Fonts: Cabinet Grotesk (display), Geist and Geist Mono (body)
- Deployed on [Netlify](https://www.netlify.com); every push to `main` redeploys

SEO: page metadata, Open Graph share image, Person structured data, sitemap and robots.txt, all generated from `src/app`.

## Run locally

Requires Node.js 20 or later.

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

```bash
npm run build   # production build
npm run lint    # lint checks
```

## Where to edit things

| To change | Edit |
| --- | --- |
| Site URL, email, LinkedIn, page title and description | `src/lib/site.ts` |
| Section content | `src/components/` (one file per section) |
| Colours and dark theme | `src/app/globals.css` |
| Share image and icon | `src/app/opengraph-image.tsx`, `src/app/icon.tsx` |
| Resume download | replace `public/MadhavPande_Resume.pdf` |

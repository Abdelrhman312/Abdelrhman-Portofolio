# Abdelrahman Moataz — Personal Brand Portfolio

A bilingual (English / Arabic) personal portfolio built with Next.js App Router, React, TypeScript, Tailwind CSS 4, Framer Motion, and Lucide React. The site uses an editorial, commercial-industrial visual system and adapts layout direction for Arabic.

## Run locally

Requirements: Node.js 20.9 or newer and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Production commands: `npm run build`, then `npm start`.

## Update profile and contact details

Edit [`src/data/profile.ts`](src/data/profile.ts). Add only verified contact details to `email`, `phone`, `whatsapp` (international digits, no `+`), and `linkedin`. `speedUrl`, `cv`, and `photo` are optional. Contact methods appear only when configured. The contact form uses a `mailto:` fallback and clearly indicates that it opens the visitor's email application; it does not submit to a server. Add a real service before using it as a server-backed form.

The same file contains editable experience date and achievement verification settings. The achievements in the initial page are user-provided and marked for validation. Confirm or remove the sales growth, sales experience, and leadership figures before publication. Replace the experience date placeholder with verified dates. Edit project descriptions in the `projects` data array in the same file; all project detail views use this central content.

## Images and CV

The hero uses an original abstract CSS composition, not a stock portrait. Add an authentic profile photograph under `public/images/`, set `profile.photo`, and update the hero component to render it with `next/image` when ready. Put a CV PDF in `public/documents/` and set `profile.cv` to its public path. The current design intentionally avoids a fabricated portrait or project photography.

## SEO and deployment

Metadata is in `src/app/layout.tsx`; robots and sitemap are generated in `src/app/robots.ts` and `src/app/sitemap.ts`. Set `NEXT_PUBLIC_SITE_URL` to the canonical deployed origin in Vercel project settings before publishing. Without it, the site omits its canonical URL and sitemap entry rather than publishing a placeholder domain. Import the repository into Vercel; its Next.js preset detects the build command automatically.

## Before publishing

- Confirm contact channels and LinkedIn URL.
- Confirm employer / company name, role wording, and employment dates.
- Validate or remove all achievement figures and associated case-study claims.
- Confirm tools genuinely used and edit the expertise / service content if needed.
- Add a genuine portrait and CV only if desired.
- Set the production canonical URL and inspect the Arabic and English metadata.
- Confirm whether SPEED has an independent public URL or keep the contact link.

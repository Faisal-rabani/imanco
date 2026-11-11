# IMANCO GCC

A Next.js App Router page for clay roof tile and roofing component enquiries. It uses IMANCO’s public catalogue, project portfolio and Contact page.

## Local preview

```sh
npm ci
npm run dev
```

Open http://localhost:3000/gcc. Run `npm run lint` and `npm run build` to check the production build.

## Production integration

The live IMANCO site already uses Next.js and has its own sitemap. Integrate the `app/gcc` route, the page assets and the brand styles into the live application. The standalone root redirect is for the local preview. The route’s metadata uses `https://imanco.net/gcc` as its canonical URL. Confirm that the deployed page and social preview image resolve on the canonical host, and add `/gcc` to the existing navigation and sitemap.

The four supplied images are presented as UAE project references. Confirm publication rights, attribution and any IMANCO product or supply details before adding them as project claims. The enquiry CTA uses IMANCO’s existing Contact page.

The project-local [IMANCO GCC SEO skill](.claude/skills/imanco-gcc-seo/SKILL.md) applies the Claude SEO toolkit to ongoing product, destination and buyer-question updates.

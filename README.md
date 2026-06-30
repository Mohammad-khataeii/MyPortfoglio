# Seyedmohammad Khataeipour Portfolio

Premium personal portfolio built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm run start
```

## Deploying to Vercel and configuring cv.mohammadkhataei.us

1. Push the repository to GitHub.
2. Import the repository in Vercel.
3. Select the Next.js framework preset.
4. Use the build command `npm run build`.
5. Let Vercel use the default Next.js output settings.
6. Add the custom domain `cv.mohammadkhataei.us` in the Vercel project settings.
7. In the DNS provider for `mohammadkhataei.us`, add the DNS record requested by Vercel.
8. This is usually a `CNAME` for `cv` pointing to `cname.vercel-dns.com`, or whatever exact target Vercel shows in the dashboard.
9. Wait for DNS propagation and for the SSL certificate to become active in Vercel.
10. Verify the final site at [https://cv.mohammadkhataei.us](https://cv.mohammadkhataei.us).

Do not hardcode DNS values unless Vercel explicitly shows a different record in the dashboard at deploy time.

## Content TODOs

- Replace the placeholder LinkedIn URL in [data/profile.ts](/Users/mohammadkhataei/Desktop/myPortfoglio/data/profile.ts).
- Replace the placeholder GitHub URL in [data/profile.ts](/Users/mohammadkhataei/Desktop/myPortfoglio/data/profile.ts).
- Keep `public/cv.pdf` updated with the latest CV when needed.

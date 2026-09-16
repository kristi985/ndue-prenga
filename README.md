This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Responsive images for static hosting

`npm run images:optimize` creates responsive WebP copies of the photographs listed
in `scripts/optimize-images.mjs`. It also runs automatically before `npm run dev`
and `npm run build`. Keep original photographs in `public/images`; the generator
writes only to `public/images/optimized`.

The custom loader in `app/lib/static-image-loader.js` uses the generated manifest,
so exported pages need no running image service. The configured widths are 384,
768, 1280 and 1920 pixels. Each photograph is capped at its original width and is
never enlarged; requests above that limit reuse its largest available variant.
Next's responsive width descriptors still reflect its configured target widths.
Local `NEXT_PUBLIC_BASE_PATH` prefixes and extra path slashes are normalized.

When adding a photograph, add its basename to the generator's `sources` list and
rerun the command. Unlisted or remote images retain their original URL. Generated
filenames contain a content hash to invalidate cached photos after edits. The
generator retains older variants so already-open pages can still request them.
Keep the width list in the generator and `next.config.mjs` synchronized.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

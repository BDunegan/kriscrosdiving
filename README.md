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

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Deploying to Vercel

1. Push your code to a GitHub, GitLab, or Bitbucket repository.
2. Go to [vercel.com](https://vercel.com/) and sign in with your account.
3. Click "New Project" and import your repository.
4. Vercel will auto-detect Next.js. No extra configuration is needed.
5. Click "Deploy". Your site will be live on a Vercel URL.

**Environment Variables:**
- If you use any environment variables, add them in the Vercel dashboard under Project Settings > Environment Variables.

**Custom Domain:**
- You can add a custom domain in the Vercel dashboard after deployment.

**Structure**
/about
/faq
/tours
/training

Components/
    sections/
        about/
            Reviews.tsx
        tours/
            Cavern.tsx
            Cozumel.tsx
            PlayaDelCarmenReef.tsx
            TulumReef.tsx
        training/
            Advanced.tsx
            Discovery.tsx
            OpenWater.tsx
        FAQList.tsx
    ui/
        Card.tsx
        Container.tsx
        ThemeProviderWrapper.tsx
    Footer.tsx
    Header.tsx

public/
    ## all the picture resources are stored here.
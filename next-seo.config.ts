import { NextSeoProps } from 'next-seo';

const config: NextSeoProps = {
  openGraph: {
    title: 'Yogyy',
    type: 'website',
    description: 'Frontend Developer | Optimist | Self-Learner | Specializing in React',
    images: [
      {
        url: 'https://yogyy.vercel.app/images/og-image.jpg',
        width: 1200,
        height: 600,
        alt: 'open graph image',
        type: 'image/jpeg',
      },
    ],
    siteName: 'yogyy const',
    locale: 'en-US,id-ID',
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '192x192',
      href: '/android-chrome-192x192.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '512x512',
      href: '/android-chrome-512x512.png',
    },
    {
      rel: 'apple-touch-icon',
      type: 'image/png',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],

  additionalMetaTags: [
    {
      name: 'keywords',
      content:
        'yogyy portfolio, yogyy projects, yogyy web developer, yogyy frontend, yogyy personal projects, yogyy dev',
    },
    {
      name: 'theme-color',
      content: '#010409',
    },
    {
      name: 'google-site-verification',
      content: 'JZStioxiRjgkd_yUbH_SwvzLPibnkJptjA9QZQi1Gy4',
    },
  ],
  twitter: {
    handle: '@yogyyconst',
    site: 'yogyy',
    cardType: 'summary_large_image',
  },
};

export default config;

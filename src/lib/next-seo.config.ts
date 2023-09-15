import { NextSeoProps } from 'next-seo';

const config: NextSeoProps = {
  openGraph: {
    type: 'website',
    images: [
      {
        url: '/images/og.jpg',
        width: 1200,
        height: 630,
        alt: 'open graph image',
        type: 'image/jpeg',
      },
    ],
    siteName: 'yogyy cons`t',
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
  ],
  twitter: {
    handle: '@yogyxx',
    site: '@yogyxx',
    cardType: 'summary_large_image',
  },
};

export default config;

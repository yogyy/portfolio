import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  title: 'yogyy',
  description: 'into the webdev',
  canonical: 'https://yogyy.vercel.app',
  additionalLinkTags: [
    {
      rel: 'icon',
      href: 'favicon/favicon.ico',
    },
    {
      rel: 'icon',
      href: 'favicon/favicon-16x16.png',
      sizes: '16x16',
    },
    {
      rel: 'icon',
      href: 'favicon/favicon-32x32.png',
      sizes: '32x32',
    },
    {
      rel: 'icon',
      href: 'favicon/android-chrome-192x192.png',
      sizes: '192x192',
    },
    {
      rel: 'icon',
      href: 'favicon/android-chrome-512x512.png',
      sizes: '512x512',
    },
    {
      rel: 'apple-touch-icon',
      href: 'favicon/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: 'favicon/site.webmanifest',
    },
  ],
  openGraph: {
    url: 'https://yogyy.vercel.app',
    title: 'Muhammad Yogi Firman Syah - Portfolio',
    description:
      'Self-taught programmer weaving lines of code into dreams as boundless as the digital realm',
    images: [
      {
        url: 'https://res.cloudinary.com/dpegakmzh/image/upload/v1691148599/open_graph_polos_knp6ub.jpg',
        width: 1200,
        height: 630,
        alt: 'yogyy',
        type: 'image/jpeg',
      },
    ],
    siteName: 'yogyy',
  },
  twitter: {
    handle: '@yogyxx',
    site: '@yogyxx',
    cardType: 'summary_large_image',
  },
};

export default config;

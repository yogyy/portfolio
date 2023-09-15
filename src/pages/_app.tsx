import '@/styles/globals.css';
import '@/styles/nprogess.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import Router from 'next/router';
import { Analytics } from '@vercel/analytics/react';
import SEO from '@/lib/next-seo.config';

import nProgress from 'nprogress';
import { PreloadProvider } from '@/components/PreloadContext';
import { DefaultSeo } from 'next-seo';
Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.remove);
Router.events.on('routeChangeComplete', nProgress.done);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <PreloadProvider>
        <Component {...pageProps} />
        <Analytics />
      </PreloadProvider>
    </ThemeProvider>
  );
}

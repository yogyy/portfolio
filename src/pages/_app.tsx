import '@/styles/globals.css';
import '@/styles/nprogess.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import Router from 'next/router';

import nProgress from 'nprogress';
import { PreloadProvider } from '@/components/PreloadContext';
import { PostHogProvider } from 'posthog-js/react';
import posthog from 'posthog-js';
import { isProd } from '@/constants/env';
Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.remove);
Router.events.on('routeChangeComplete', nProgress.done);

if (typeof window !== 'undefined' && isProd) {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || '', {
    api_host: 'https://app.posthog.com',
  });
}
export default function App({ Component, pageProps }: AppProps) {
  return (
    <PostHogProvider client={posthog}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        <PreloadProvider>
          <Component {...pageProps} />
        </PreloadProvider>
      </ThemeProvider>
    </PostHogProvider>
  );
}

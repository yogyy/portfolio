import '@/styles/globals.css';
import '@/styles/nprogess.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import Router, { useRouter } from 'next/router';

import nProgress from 'nprogress';
import { PostHogProvider } from 'posthog-js/react';
import posthog from 'posthog-js';
import { isProd } from '@/constants/env';
import { LazyMotion } from 'framer-motion';
import React from 'react';
Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.remove);
Router.events.on('routeChangeComplete', nProgress.done);

if (typeof window !== 'undefined' && isProd) {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: 'https://app.posthog.com',
  });
}
const loadFeatures = () => import('@/lib/features').then(res => res.default);

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  React.useEffect(() => {
    // Track page views
    const handleRouteChange = () => posthog?.capture('$pageview');
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <PostHogProvider client={posthog}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        <LazyMotion features={loadFeatures} strict>
          <Component {...pageProps} />
        </LazyMotion>
      </ThemeProvider>
    </PostHogProvider>
  );
}

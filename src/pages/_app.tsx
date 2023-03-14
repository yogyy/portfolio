import '@/styles/globals.css';
import '@/styles/nprogess.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
// import { Inter } from 'next/font/google';
// const inter = Inter({ subsets: ['latin'] });
import Router from 'next/router';

import nProgress from 'nprogress';
import { PreloadProvider } from '@/components/PreloadContext';
Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true}>
      <PreloadProvider>
        <Component {...pageProps} />
      </PreloadProvider>
    </ThemeProvider>
  );
}

import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import SEO from 'next-seo.config';
import { GridPattern } from '@/components/grid-pattern';
import { isProd } from '@/constants/env';
import { Footer } from './footer';
import { Navbar } from './navbar';

interface SeoProps {
  title?: string;
  desc?: string;
  children: React.ReactNode;
}

export const RootLayout = ({ children, title, desc }: SeoProps) => {
  const { asPath } = useRouter();

  return (
    <>
      <NextSeo
        {...SEO}
        title={title}
        description={desc || SEO.openGraph?.description}
        openGraph={{
          ...SEO.openGraph,
          title: title || SEO.openGraph?.title,
          description: desc || SEO.openGraph?.description,
        }}
        canonical={isProd ? `https://yogyy.vercel.app${asPath}` : `localhost:3000${asPath}`}
        defaultTitle={SEO.openGraph?.title}
      />
      <Navbar />
      <GridPattern
        className="fixed inset-x-0 -z-10 h-full w-full fill-primary/20 stroke-accent/5 [mask-image:linear-gradient(to_top_left,white_60%,transparent_60%)]"
        yOffset={-96}
      />
      <main id="skip-nav" className={`${GeistSans.variable} ${GeistMono.variable} font-sans`}>
        {children}
      </main>
      <Footer />
    </>
  );
};

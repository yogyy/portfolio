import { NextSeo } from 'next-seo';
import Footer from './footer';
import Navbar from './navbar';
import { GeistSans } from 'geist/font/sans';
import { useRouter } from 'next/router';
import YG from '../YG';
import { cn } from '@/lib/utils';
import SEO from 'next-seo.config';
import { isProd } from '@/constants/env';

interface SeoProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  desc?: string;
}

const NextSEO = (props: SeoProps) => {
  const { children, title, desc } = props;
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
      <>
        <Navbar />
        <main id="skip-nav" className={cn(GeistSans.className, '')}>
          {children}
          <YG
            className={cn(
              'fixed bottom-14 right-1 blur-sm sm:right-6',
              'translate-y-[37%] transform-gpu',
              'w-[calc(100%-3rem)] md:w-[600px] 2xl:w-[900px]',
              'z-[-1] opacity-70',
            )}
          />
        </main>
        <Footer />
      </>
    </>
  );
};

export default NextSEO;

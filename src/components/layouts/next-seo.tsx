import { NextSeo } from 'next-seo';
import Footer from './footer';
import Navbar from './navbar';
import { Inter } from 'next/font/google';
import { useRouter } from 'next/router';
import YG from '../YG';
import { cn } from '@/lib/utils';
import SEO from 'next-seo.config';
import { isProd } from '@/constants/env';

interface SeoProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  desc?: string;
}

const inter = Inter({ subsets: ['latin'] });

const NextSEO = (props: SeoProps) => {
  const { children, title, desc, className } = props;
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
      <div className="flex flex-col">
        <Navbar />
        <main id="skip-nav" className={cn(inter.className, 'z-[1]', className)}>
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
      </div>
    </>
  );
};

export default NextSEO;

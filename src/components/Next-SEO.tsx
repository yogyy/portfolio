import { NextSeo } from 'next-seo';
import Footer from './layouts/footer';
import Navbar from './layouts/navbar';
import { Inter } from 'next/font/google';
import { useRouter } from 'next/router';
import YG from './YG';
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
        title={title}
        description={desc || SEO.openGraph?.description}
        canonical={isProd ? `https://yogyy.verce.app${asPath}` : `localhost:3000${asPath}`}
        defaultTitle={SEO.openGraph?.title}
        {...SEO}
      />
      <div className="flex flex-col">
        <Navbar />
        <main id="skip-nav" className={cn(inter.className, className)} {...props}>
          {children}
          <YG
            className={cn(
              'fixed bottom-14 right-1 sm:right-6',
              'translate-y-[37%] transform-gpu',
              'w-[calc(100%-3rem)] md:w-[600px] 2xl:w-[900px]',
              'z-[-1] opacity-70 dark:opacity-40'
            )}
          />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default NextSEO;

{
  /* <HeadMetaData title={title} metaDescription={desc} /> */
}

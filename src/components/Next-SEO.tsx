import { NextSeo } from 'next-seo';
import Footer from './layouts/footer';
import Navbar from './layouts/navbar';
import { Inter } from 'next/font/google';
import { useRouter } from 'next/router';
import YG from './YG';
import clsx from 'clsx';
import { cn } from '@/lib/utils';

interface SeoProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  title?: string;
  desc?: string;
}

const inter = Inter({ subsets: ['latin'] });

const NextSEO = (props: SeoProps) => {
  const router = useRouter();
  const { children, title, desc, className } = props;

  return (
    <>
      <NextSeo
        title={title}
        description={desc}
        canonical={`https://yogyy.vercel.app${router.asPath}`}
        openGraph={{
          url: `https://yogyy.vercel.app${router.asPath}`,
        }}
      />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main id="skip-nav" className={cn(inter.className, className)}>
          {children}
        </main>
        <YG
          className={clsx(
            'fixed bottom-14 right-1 sm:right-6',
            'translate-y-[37%] transform-gpu',
            'w-[calc(100%-3rem)] md:w-[600px] 2xl:w-[900px]',
            'z-[-1] opacity-70 dark:opacity-40'
          )}
        />
        <Footer />
      </div>
    </>
  );
};

export default NextSEO;

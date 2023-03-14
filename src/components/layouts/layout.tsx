import Head from 'next/head';
import React, { ReactNode } from 'react';
import YG from '@/components/YG';
import clsx from 'clsx';
import Navbar from './navbar';
import { Inter } from 'next/font/google';
import { useRouter } from 'next/router';
import Footer from './footer';
const inter = Inter({ subsets: ['latin'] });

interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
  content?: string;
}

export default function Layout(props: LayoutProps, ...customMeta: any) {
  const { children, pageTitle, content } = props;
  const router = useRouter();
  const meta = {
    title: 'yogyy',
    description:
      'kinda full-stack developer specializing in building web applications',
    image:
      'https://res.cloudinary.com/dpegakmzh/image/upload/v1678798132/yg_siuo8y.png',
    largeImageCard: false,
    type: 'website',
    ...customMeta,
  };
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content={content ? content : meta.description}
        />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:type" content={meta.type} />
        <meta
          property="og:url"
          content={`https://yogyy.vercel.app${router.asPath}`}
        />
        <meta property="og:site_name" content="yogyy" />
        {meta.largeImageCard && (
          <meta name="twitter:card" content="summary_large_image" />
        )}
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <meta name="twitter:site" content="@yogyxx" />
        <meta name="twitter:creator" content="@yogyxx" />
        <meta name="robots" content="follow, index" />
        <meta
          name="keywords"
          content="frontend, full-stack, developer, web, application, javascript, typescript, blog, portfolio, nextjs, react, yogyy, yogi"
        />
        <link
          rel="canonical"
          href={`https://yogyy.vercel.app${router.asPath}`}
        />
      </Head>
      <Navbar />
      <main className={inter.className}>
        {children}
        <YG
          className={clsx(
            'fixed bottom-20 right-6',
            'translate-y-[37%] transform-gpu',
            'w-[calc(100%-3rem)] md:w-[600px] 2xl:w-[900px]',
            'z-[-1] opacity-70 dark:opacity-40'
          )}
        />
      </main>
      <Footer />
    </>
  );
}

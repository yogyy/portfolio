import Footer from '@/app/layout/footer';
import Head from 'next/head';
import React, { ReactNode } from 'react';
import { PreloadProvider } from '@/components/PreloadContext';
import YG from '@/components/YG';
import clsx from 'clsx';
import Navbar from './navbar';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
  content?: string;
}

export default function Layout(props: LayoutProps) {
  const { children, pageTitle, content } = props;
  return (
    <>
      <Head>
        <title>{`${pageTitle}`}</title>
        <meta
          name="description"
          content={
            content ? content : 'Muhammad Yogi Firman Syah Website Portofolio'
          }
        />
      </Head>
      {/* <Sidebar /> */}

      <>
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
    </>
  );
}

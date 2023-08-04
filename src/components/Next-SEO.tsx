import { NextSeo } from 'next-seo';
import Footer from './layouts/footer';
import Navbar from './layouts/navbar';
import { Inter } from 'next/font/google';
import { useRouter } from 'next/router';

interface SeoProps {
  children: React.ReactNode;
  title?: string;
  desc?: string;
}

const inter = Inter({ subsets: ['latin'] });

const NextSEO = (props: SeoProps) => {
  const router = useRouter();
  const { children, title, desc } = props;

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
      <Navbar />
      <main id="skip-nav" className={inter.className}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default NextSEO;

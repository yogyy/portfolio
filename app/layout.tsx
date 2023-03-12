import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './layout/navbar';
import Footer from './layout/footer';
import { PreloadProvider } from './components/PreloadContext';
import YG from './components/YG';
import clsx from 'clsx';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Portofolio | Muhammad Yogi Firman Syah ',
  description: 'Muhammad Yogi Firman Syah website protofolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-white transition-colors dark:bg-dark text-gray-700 dark:text-gray-200`}
      >
        <PreloadProvider>
          <Navbar />
          <main>
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
        </PreloadProvider>
      </body>
    </html>
  );
}

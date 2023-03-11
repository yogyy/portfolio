import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './layout/navbar';
import Footer from './layout/footer';
import { PreloadProvider } from './components/PreloadContext';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Portofolio',
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
          <main className="">{children}</main>
          <footer>
            <Footer />
          </footer>
        </PreloadProvider>
        {/* <Script
            type="module"
            src="https://unpkg.com/ionicons@latest/dist/ionicons/ionicons.esm.js"
          ></Script>
          <Script
            type="module"
            src="https://unpkg.com/ionicons@latest/dist/ionicons/ionicons.js"
          ></Script> */}
      </body>
    </html>
  );
}

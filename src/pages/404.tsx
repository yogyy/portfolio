import { NextSeo } from 'next-seo';
import Link from 'next/link';

export default function Custom404() {
  return (
    <>
      <NextSeo title="404 not found" />
      <div className="bg-dark-bg grid min-h-screen w-screen place-content-center bg-gradient-to-br">
        <div className="relative flex h-screen flex-col items-center justify-center">
          <Link href="/" className="">
            <h1 className="bg-gradient-to-br from-yellow-500 to-red-600 bg-clip-text text-6xl text-transparent xl:text-9xl">
              404
            </h1>
          </Link>
          <p className="text-accent">page couldn&apos;t be found</p>
        </div>
      </div>
    </>
  );
}

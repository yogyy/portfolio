import { NextSeo } from 'next-seo';
import Link from 'next/link';

export default function Custom404() {
  return (
    <>
      <NextSeo title="404 not found" />
      <div className="min-h-screen w-screen grid place-content-center bg-gradient-to-br bg-dark-bg">
        <div className="relative h-screen flex flex-col items-center justify-center">
          <Link href="/" className="">
            <h1 className="text-6xl xl:text-9xl text-transparent bg-clip-text bg-gradient-to-br motion-safe:animate-gradient-x from-yellow-500 via-white to-red-600">
              404
            </h1>
          </Link>
        </div>
      </div>
    </>
  );
}

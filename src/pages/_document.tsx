import clsx from 'clsx';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          async
          defer
          src="https://analytics.umami.is/script.js"
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID || ''}
        ></script>
      </Head>
      <body
        className={clsx(
          'bg-white dark:bg-dark',
          'transition-colors text-gray-700 dark:text-gray-200'
        )}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

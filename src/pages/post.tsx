import IsLoaded from '@/components/isLoaded';
import RootLayout from '@/components/layouts/layout';
import NextSEO from '@/components/Next-SEO';
import clsx from 'clsx';
import * as React from 'react';

export default function Posts() {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch('https://jsonplaceholder.typicode.{cos}');
  //       if (!res.ok) {
  //         throw new Error('Failed to fetch data');
  //       }
  //       const data = await res.json();
  //       setPosts(data);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <NextSEO title="Post - yogyy" desc="showing all my post i created">
      <IsLoaded className="mt-nav">
        <div className={clsx('min-h-main layout py-12 leading-7')}>
          <h1 gaya-fade="1">Empty</h1>
        </div>
      </IsLoaded>
    </NextSEO>
  );
}

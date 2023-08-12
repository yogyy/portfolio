import IsLoaded from '@/components/isLoaded';
import NextSEO from '@/components/Next-SEO';
import clsx from 'clsx';
import { allPosts } from 'contentlayer/generated';
import Link from 'next/link';
import * as React from 'react';
import { HiArrowRight, HiArrowSmRight } from 'react-icons/hi';

export default function Page() {
  return (
    <NextSEO title="Post - yogyy" desc="showing all my post i created">
      <IsLoaded className="mt-20 min-h-[calc(100dvh_-_239px)]">
        <div className={clsx('max-w-3xl mx-4 md:mx-auto border-l')}>
          {allPosts.map((post, _i) => (
            <Link key={post._id} href={post.slug} className="group">
              <div className="flex gap-2 justify-start group-hover:bg-dark-accent/20 rounded-sm">
                <div className="items-center justify-start flex pl-5 w-[250px]">
                  <p className="">{post.date}</p>
                </div>
                <div className="w-full">
                  <h1 className="text-[1.5em]">{post.title}</h1>
                  <p>{post.description}</p>
                  <span className="flex gap-1 items-center group-hover:text-dark-accent">
                    Read <HiArrowSmRight />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </IsLoaded>
    </NextSEO>
  );
}

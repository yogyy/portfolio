import IsLoaded from '@/components/isLoaded';
import NextSEO from '@/components/Next-SEO';
import { cn } from '@/lib/utils';
import { allPosts } from 'contentlayer/generated';
import Link from 'next/link';
import * as React from 'react';
import { HiArrowSmRight } from 'react-icons/hi';
import image from 'public/images/gh-pages.jpg';
import Image from 'next/image';

export default function Page() {
  return (
    <NextSEO title="Post - yogyy" desc="showing all my post i created">
      <IsLoaded className="mt-20 min-h-[calc(100dvh_-_239px)]">
        <div className={cn('max-w-3xl mx-4 md:mx-auto flex flex-col gap-5')}>
          {allPosts.map((post, _i) => (
            <Link
              key={post._id}
              href={post.slug}
              className={cn(
                'relative flex flex-col md:flex-row gap-2 justify-start rounded-sm border-l-2 group pl-4 py-1.5',
                'focus:border-dark-accent focus:bg-dark-accent/20 outline-none',
                'hover:bg-dark-accent/20 hover:border-dark-accent',
                'focus-visible:border-dark-accent focus-visible:bg-dark-accent/20',
                'transition-colors duration-200'
              )}
            >
              <div className="items-center justify-start flex w-[250px]">
                <p className="text-sm">{post.date}</p>
              </div>
              <div className="w-full">
                <h1 className="text-lg md:text-[1.25em]">{post.title}</h1>
                <p className="mt-2.5">{post.description}</p>
                <span
                  className={cn(
                    'flex place-content-end gap-1 items-center transition-colors duration-300',
                    'group-hover:text-dark-accent group mr-4'
                  )}
                >
                  Read <HiArrowSmRight />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </IsLoaded>
    </NextSEO>
  );
}

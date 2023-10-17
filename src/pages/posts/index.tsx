import { Accent } from '@/components/accent';
import IsLoaded from '@/components/isLoaded';
import NextSEO from '@/components/Next-SEO';
import { cn } from '@/lib/utils';
import { allPosts } from 'contentlayer/generated';
import Link from 'next/link';
import * as React from 'react';
import { HiArrowSmRight } from 'react-icons/hi';

export default function Page() {
  return (
    <NextSEO title="Post · Yogyy" desc="showing all my post i created">
      <IsLoaded className="mt-20 min-h-[calc(100dvh_-_303px)]">
        <div gaya-fade="1" className={cn('max-w-3xl mx-4 md:mx-auto flex flex-col gap-5')}>
          <h1 className="mb-4">
            <Accent>Blog Posts</Accent>
          </h1>
          <ul gaya-fade="2" className="flex flex-col max-w-3xl gap-5 mx-4 md:mx-auto">
            {allPosts.map((post, _i) => (
              <li key={post._id}>
                <Link
                  href={post.slug}
                  className={cn(
                    'relative flex flex-col md:flex-row gap-2 justify-start rounded-sm border-l-2 group pl-4 py-1.5',
                    'focus:border-dark-accent focus:bg-dark-accent/20 outline-none',
                    'hover:bg-dark-accent/20 hover:border-dark-accent',
                    'focus-visible:border-dark-accent focus-visible:bg-dark-accent/20',
                    'transition-colors duration-200 text-zinc-700 dark:text-zinc-300'
                  )}
                >
                  <div className="items-center justify-start flex w-[250px]">
                    <p className="text-sm text-inherit">{post.date}</p>
                  </div>
                  <div className="relative w-full">
                    <h1 className="text-lg md:text-[1.25em]">{post.title}</h1>
                    <p className="mt-2.5 text-inherit">{post.description}</p>
                    <span
                      className={cn(
                        'flex justify-end gap-1 items-center transition-colors duration-300',
                        'group-hover:text-dark-accent group mr-4 text-zinc-700 dark:text-zinc-300'
                      )}
                    >
                      Read <HiArrowSmRight />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </IsLoaded>
    </NextSEO>
  );
}

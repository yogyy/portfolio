import { Accent } from '@/components/accent';
import { AnimationProps, m } from 'framer-motion';
import { RootLayout } from '@/components/layouts';
import { cn } from '@/lib/utils';
import { allPosts } from 'contentlayer/generated';
import Link from 'next/link';
import * as React from 'react';
import { HiArrowSmRight } from 'react-icons/hi';
import { easeOut, easeOutBack } from '@/constants/framer-easing';

export default function Page() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <RootLayout title="Post · Yogyy" desc="showing all my post i created">
      <m.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mt-20 min-h-[calc(100dvh_-_303px)]"
        transition={{ easings: easeOut, duration: 0.4 }}
      >
        <div className={cn('mx-4 flex max-w-3xl flex-col gap-5 md:mx-auto')}>
          <h1 className="mb-4">
            <Accent>Blog Posts</Accent>
          </h1>
          <m.ul
            variants={container}
            initial="hidden"
            animate="show"
            className="mx-4 flex max-w-3xl flex-col gap-5 md:mx-auto"
          >
            {allPosts.map((post, _i) => (
              <m.li key={post._id} variants={item} transition={{ easings: easeOut, duration: 0.4 }}>
                <Link
                  href={post.slug}
                  className={cn(
                    'group relative flex flex-col justify-start gap-2 rounded-sm border-l-2 py-1.5 pl-4 text-text md:flex-row',
                    'outline-none transition-colors duration-200 hover:border-accent hover:bg-accent/20',
                    'focfocus:border-accent focus-visible:border-accentus-visible:bg-accent/20 focus:bg-accent/20',
                  )}
                >
                  <div className="flex w-[250px] items-center justify-start">
                    <p className="text-sm text-inherit">{post.date}</p>
                  </div>
                  <div className="relative w-full">
                    <h1 className="text-lg md:text-[1.25em]">{post.title}</h1>
                    <p className="mt-2.5 text-inherit">{post.description}</p>
                    <span
                      className={cn(
                        'flex items-center justify-end gap-1 transition-colors duration-300',
                        'group mr-4 group-hover:text-accent group-focus:text-accent',
                      )}
                    >
                      Read <HiArrowSmRight />
                    </span>
                  </div>
                </Link>
              </m.li>
            ))}
          </m.ul>
        </div>
      </m.div>
    </RootLayout>
  );
}

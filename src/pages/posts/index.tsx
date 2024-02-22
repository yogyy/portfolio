import Link from 'next/link';
import { cn } from '@/lib/utils';
import { m } from 'framer-motion';
import { Accent } from '@/components/accent';
import { HiArrowSmRight } from 'react-icons/hi';
import { RootLayout } from '@/components/layouts';
import { allPosts } from 'contentlayer/generated';
import { easeOutBack } from '@/constants/framer-easing';

export default function Page() {
  return (
    <RootLayout title="Post · Yogyy" desc="showing all my post i created">
      <m.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mt-20 min-h-[calc(100dvh_-_303px)]"
        transition={{ easings: easeOutBack, duration: 0.4 }}
      >
        <div className={cn('mx-4 flex max-w-3xl flex-col gap-5 md:mx-auto')}>
          <h1 className="mb-4">
            <Accent>Blog Posts</Accent>
          </h1>
          <m.ul
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ easings: easeOutBack, duration: 0.6, delay: 0.3 }}
            className="mx-4 flex max-w-3xl flex-col gap-5 md:mx-auto"
          >
            {allPosts.map((post, _i) => (
              <li key={post._id}>
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
              </li>
            ))}
          </m.ul>
        </div>
      </m.div>
    </RootLayout>
  );
}

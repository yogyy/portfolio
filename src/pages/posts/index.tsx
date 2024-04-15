import Link from 'next/link';
import { cn } from '@/lib/utils';
import { m } from 'framer-motion';
import { RootLayout } from '@/components/layouts';
import { allPosts } from 'contentlayer/generated';
import { easeOutBack } from '@/constants/framer-easing';
import { DocsPageHeader } from '@/components/mdx/page-header';

export default function Page() {
  return (
    <RootLayout title="Post · Yogyy" desc="showing all my post i created">
      <div className="layout mt-20 flex min-h-[calc(100dvh_-_303px)] flex-col gap-4">
        <DocsPageHeader
          heading="A Small Blog"
          text="Explore my collection of insightful(hope so) articles."
        />
        <m.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ easings: easeOutBack, duration: 0.7 }}
          className="flex max-w-3xl flex-col gap-5"
        >
          {allPosts.map(post => (
            <li key={post._id}>
              <Link
                href={post.slug}
                className={cn(
                  'group relative grid justify-start gap-2 rounded-sm text-text',
                  'outline-none transition-colors duration-200 focus-within:text-accent/50 hover:text-accent/50',
                )}
              >
                <div className="relative w-full">
                  <h1 className="text-lg md:text-[1.25em]">{post.title}</h1>
                  <p className="text-inherit">{post.description}</p>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">{post.date}</p>
              </Link>
            </li>
          ))}
        </m.ul>
      </div>
    </RootLayout>
  );
}

import React from 'react';
import { allPosts, Post } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { GetStaticPaths } from 'next';
import NextSEO from '@/components/layouts/next-seo';
import { Mdx } from '@/components/mdx/mdx-component';
import { DocsPageHeader } from '@/components/mdx/page-header';
import { HiArrowLeft } from 'react-icons/hi';
import { useRouter } from 'next/navigation';
import { DashboardTableOfContents } from '@/components/mdx/toc';
import { getTableOfContents, TableOfContents } from '@/lib/toc';
import { m } from 'framer-motion';
import { easeIn } from '@/constants/framer-easing';

export const getStaticPaths: GetStaticPaths = () => {
  const paths = allPosts.map(post => `/${post._raw.flattenedPath}`);
  return { paths, fallback: false };
};

export const getStaticProps = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const post = allPosts.find(post => post._raw.flattenedPath === `posts/${slug}`);

  if (!post) notFound();

  return {
    props: {
      post,
    },
  };
};

export const Posts = ({ post }: { post: Post }) => {
  const [toc, setToc] = React.useState<TableOfContents>();
  const { back } = useRouter();

  React.useEffect(() => {
    const fetchToc = async () => {
      try {
        const tocData = await getTableOfContents(post.body.raw);
        setToc(tocData);
      } catch (error) {
        console.error('Error fetching table of contents:', error);
      }
    };

    fetchToc();
  }, [post.body.raw]);

  return (
    <NextSEO title={`${post.title} · Yogyy`} desc={post.description}>
      <m.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ easings: easeIn, duration: 0.6, delay: 0.1 }}
      >
        <div className="bg-coret relative py-8">
          <div className="layout">
            <button
              onClick={() => back()}
              className="animated-underline group flex items-center gap-3 font-semibold"
            >
              <HiArrowLeft className="group-hover:text-dark-accent" /> Go Back <span> </span>
            </button>
            <blockquote className="[&>*]:text-muted-foreground mt-6 border-l-2 pl-6 italic">
              <p>{post.date}</p>
            </blockquote>
            <DocsPageHeader heading={post.title} text={post.description} />
          </div>
        </div>
        <div className="layout py-6 lg:grid lg:grid-cols-[auto,250px] lg:gap-8">
          <article className="h-full w-full min-w-0 max-w-3xl prose-h2:text-2xl prose-h2:text-accent prose-a:text-accent">
            <Mdx code={post.body.code} />
          </article>
          <aside className="hidden h-full text-sm lg:block">
            <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
              {toc && <DashboardTableOfContents toc={toc} />}
            </div>
          </aside>
        </div>
      </m.section>
    </NextSEO>
  );
};

export default Posts;

import React, { FC, useEffect, useState } from 'react';
import { allPosts, Post } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { GetStaticPaths, GetStaticProps } from 'next';
import NextSEO from '@/components/Next-SEO';
import { Mdx } from '@/components/mdx/mdx-component';
import { DocsPageHeader } from '@/components/mdx/page-header';
import { HiArrowLeft } from 'react-icons/hi';
import { useRouter } from 'next/navigation';
import { DashboardTableOfContents } from '@/components/mdx/toc';
import { getTableOfContents, TableOfContents } from '@/lib/toc';
import asal from 'public/handwrite.svg';
import Image from 'next/image';

export const getStaticPaths: GetStaticPaths = () => {
  const paths = allPosts.map(post => `/${post._raw.flattenedPath}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = context => {
  const slug = context.params?.slug;
  const post = allPosts.find(post => post._raw.flattenedPath === `posts/${slug}`);

  if (!post) notFound();

  return {
    props: {
      post,
    },
  };
};

export const Posts: FC<{ post: Post }> = ({ post }) => {
  const [toc, setToc] = useState<TableOfContents>();

  useEffect(() => {
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
  const { back } = useRouter();
  return (
    <NextSEO className="" title={`${post.title} - yogyy`} desc={post.description}>
      {/* <Image src={asal} alt="atas" className="w-full h-auto" /> */}
      <div className="py-8 bg-coret relative">
        <div className="layout">
          <button
            onClick={() => back()}
            className="group flex items-center gap-3 animated-underline font-semibold"
          >
            <HiArrowLeft className="group-hover:text-dark-accent" /> Go Back <span> </span>
          </button>
          <blockquote className="mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground">
            <p>{post.date}</p>
          </blockquote>
          <DocsPageHeader heading={post.title} text={post.description} />
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-[auto,250px] lg:gap-8 py-6 layout">
        <article className="w-full h-full max-w-3xl min-w-0 marker:accent prose-h2:text-2xl prose-h2:text-dark-accent">
          <Mdx code={post.body.code} />
        </article>
        <aside className="hidden h-full text-sm xl:block">
          <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
            {toc && <DashboardTableOfContents toc={toc} />}
          </div>
        </aside>
      </div>
    </NextSEO>
  );
};

export default Posts;

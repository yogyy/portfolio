import React, { FC } from 'react';
import { allPosts, Post } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { GetStaticPaths, GetStaticProps } from 'next';
import NextSEO from '@/components/Next-SEO';
import { Mdx } from '@/components/mdx/mdx-component';
import { DocsPageHeader } from '@/components/mdx/page-header';
import { HiArrowLeft } from 'react-icons/hi';
import { useRouter } from 'next/navigation';

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
  const { back } = useRouter();
  return (
    <NextSEO
      title={`${post.title} - yogyy`}
      desc={post.description}
      className="w-full flex justify-center min-h-screen"
    >
      <>
        <article className="w-full h-full max-w-3xl min-w-0 prose-h2:text-2xl prose-h2:accent">
          <div className="py-8">
            <button
              onClick={() => back()}
              className="group flex items-center gap-3 animated-underline font-semibold"
            >
              <HiArrowLeft className="group-hover:text-dark-accent" /> Go Back <span> </span>
            </button>
            <blockquote className="mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground">
              <p>{post.date}</p>
            </blockquote>
          </div>
          <DocsPageHeader heading={post.title} text={post.description} />
          <Mdx code={post.body.code} />
        </article>
      </>
    </NextSEO>
  );
};

export default Posts;

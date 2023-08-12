import React, { FC, useEffect, useState } from 'react';
import { allProjects, Project } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { GetStaticPaths, GetStaticProps } from 'next';
import NextSEO from '@/components/Next-SEO';
import { Mdx } from '@/components/mdx/mdx-component';
import { getTableOfContents, TableOfContents } from '@/lib/toc';
import { DashboardTableOfContents } from '@/components/mdx/toc';
import Image from 'next/image';
import { ParsedUrlQuery } from 'querystring';
import { HiLink, HiUser } from 'react-icons/hi';
import { SiGithub } from 'react-icons/si';
import CustomLink from '@/components/links/custom-link';

export const getStaticPaths: GetStaticPaths = () => {
  const paths = allProjects.map(post => `/${post._raw.flattenedPath}`);
  return { paths, fallback: false };
};

interface Params extends ParsedUrlQuery {
  slug: string[];
}

export const getStaticProps: GetStaticProps = ({ params }) => {
  const { slug } = params as Params;
  const post = allProjects.find(post => post._raw.flattenedPath === `projects/${slug}`);

  if (!post) notFound();

  return {
    props: {
      post,
    },
  };
};

export const Posts: FC<{ post: Project }> = ({ post }) => {
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

  return (
    <NextSEO className="layout" title={`${post.title} - yogyy`} desc={post.description}>
      <Image src={post.banner!} alt={`Project ${post.description}`} width={1445} height={792} />
      <h1 className="mt-4 text-dark-accent">{post.title}</h1>

      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{post.description}</p>
      <div className="flex flex-wrap items-center justify-start gap-3 mt-2 text-sm font-medium text-gray-600 dark:text-gray-300">
        <div className="flex items-center gap-2">
          <HiUser className="text-lg text-gray-800 dark:text-white" />
          <p className="flex items-center justify-start gap-2 mt-2 text-sm text-gray-600 dark:text-gray-300">
            {post.category}
          </p>
        </div>
        <span>-</span>
        <div className="inline-flex items-center gap-2">
          <SiGithub className="text-lg text-gray-800 dark:text-white" />
          <CustomLink href={post.github!} className="mt-1">
            Repository
          </CustomLink>
        </div>
        <span>-</span>
        <div className="inline-flex items-center gap-2">
          <HiLink className="text-lg text-gray-800 dark:text-white" />
          <CustomLink href={post.url!} className="mt-1">
            Open Live Site
          </CustomLink>
        </div>
        <div className="flex gap-1 ml-auto flex-wrap">
          {post.techs!.split(', ').map(tech => (
            <code
              className="relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm bg-dark-secondary/25 p-0.5"
              key={tech}
            >
              {tech.toLowerCase()}
            </code>
          ))}
        </div>
      </div>
      <hr className="mt-4 dark:border-gray-600" />
      <div className="lg:grid lg:grid-cols-[auto,250px] lg:gap-8 py-6">
        <article className="w-full h-full max-w-5xl min-w-0 marker:accent prose-h2:text-2xl prose-h2:text-dark-accent">
          <Mdx code={post.body.code} />
          <div className="bg-transparent h-60 " />
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

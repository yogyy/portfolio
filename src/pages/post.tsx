import IsLoaded from '@/components/isLoaded';
import RootLayout from '@/components/layouts/layout';
import clsx from 'clsx';
import * as React from 'react';

type Post = {
  id: string; // id is a string
  body: string; // body is a string
  title: number; // number is a number
};
type PostsProps = {
  posts: Post[];
};

export default function Posts({ posts }: PostsProps) {
  // React.useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch('https://jsonplaceholder.typicode.{cos}');
  //       if (!res.ok) {
  //         throw new Error('Failed to fetch data');
  //       }
  //       const data = await res.json();
  //       setPosts(data);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <RootLayout pageTitle="Post Dummy | yogyy">
      <IsLoaded className="mt-nav">
        <div className={clsx('min-h-main layout py-12')}>
          <h1 gaya-fade="1">Just Dummy Post</h1>
          <p gaya-fade="2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            molestiae quam architecto quos commodi distinctio, neque nihil nobis
            sunt, voluptatum beatae.
          </p>
          <div
            gaya-fade="3"
            className="mt-5 grid sm:grid-cols-2 md:grid-cols-3 gap-3"
          >
            {posts.map(post => (
              <div
                className="bg-gray-300/20 dark:bg-gray-500/20 p-3 rounded-sm flex flex-col justify-between"
                key={post.id}
              >
                <h2 className="text-xl dark:text-green-400 text-">
                  {post.title}
                </h2>
                <h3 className="text-base">{post.body}</h3>
              </div>
            ))}
          </div>
        </div>
      </IsLoaded>
    </RootLayout>
  );
}

export async function getStaticProps() {
  // Fetch your data here
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  // Return an object with a props key that contains your data
  return {
    props: {
      posts: data,
    },
  };
}

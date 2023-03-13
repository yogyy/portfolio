import clsx from 'clsx';
import IsLoaded from '@/components/Image/isLoaded';

export const metadata = {
  title: 'Post',
};

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Posts() {
  const posts = await getData();
  return (
    <IsLoaded className="mt-20">
      <div className={clsx('min-h-main layout')}>
        <h1 gaya-fade="1">Just Dummy Post</h1>
        <p gaya-fade="2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
          molestiae quam architecto quos commodi distinctio, neque nihil nobis
          sunt, voluptatum beatae.
        </p>
        <div className="mt-5 grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {posts.map((post: any) => (
            <div
              gaya-fade="3"
              className="bg-gray-300/20 dark:bg-gray-500/20 p-3 rounded-sm flex flex-col justify-between"
              key={post.id}
            >
              <h2 className="text-xl dark:text-green-400 text-primary-500">
                {post.title}
              </h2>
              <h3 className="text-base">{post.body}</h3>
            </div>
          ))}
        </div>
      </div>
    </IsLoaded>
  );
}

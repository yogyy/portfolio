interface ProjectCardSimple {
  title: string;
  description: string;
  github?: string | undefined;
  url?: string;
  type: string[];
}

const smallProjects: ProjectCardSimple[] = [
  {
    title: 'yogyy',
    description: 'The website you are currently on',
    url: 'https://yogyy.vercel.app',
    type: ['React', 'Typescript', 'Next JS', 'Tailwind CSS', 'Radix UI'],
  },
  {
    title: 'porto-cmd',
    description: 'A Terminal based portfolio website',
    github: 'https://github.com/yogyy/porto-cmd',
    url: 'https://yogyy-cmd.pages.dev/',
    type: ['Svelte', 'TypeScript'],
  },
  {
    title: 'Fullstack Graphql',
    description: 'Fullstack app using graphql',
    github: 'https://github.com/yogyy/apollo-graphql',
    type: ['Express', '@graphql-yoga', 'React', '@apollo-client', 'unocss'],
  },
  {
    title: 'Hono Auth',
    description: 'hono with lucia auth template',
    github: 'https://github.com/yogyy/hono-htmx-lucia',
    type: ['Hono', 'Lucia', 'Drizzle-Orm', 'Template'],
  },
  {
    title: 'Gallery',
    description: 'Searching Images using Unsplash API',
    github: 'https://github.com/yogyy/Gallery',
    type: ['React', 'Typescript', 'Next JS', 'Tailwind CSS'],
  },
  {
    title: 'Indonesia Geography',
    description: 'Showing Indonesia Geography and Searching Regency,Discrict, also Village',
    github: 'https://github.com/yogyy/Indonesia-Geography',
    type: ['React', 'Typescript', 'Next JS', 'Tailwind CSS'],
  },
  {
    title: 'The Malaka',
    description: 'landing page for a book product.',
    github: 'https://github.com/yogyy/the-malaka',
    url: 'https://yogyy.github.io/the-malaka',
    type: ['React', 'Typescript', 'Tailwind CSS', 'Slicing'],
  },
  {
    title: 'Gh/Searcher',
    description: "searching user & user's repo",
    github: 'https://github.com/yogyy/ghsearcher',
    url: 'https://yogyy.github.io/ghsearcher',
    type: ['React', 'TypeScript', 'Tailwind CSS', 'Radix UI'],
  },
  {
    title: 'DressLy',
    description: 'landing page for fashion shop',
    github: 'https://github.com/yogyy/DressLy',
    url: 'https://yogyy.github.io/DressLy/',
    type: ['Vue', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'ToDo App',
    description: 'Drag Drop To Do',
    github: 'https://github.com/yogyy/react-todo-drag-and-drop',
    url: 'https://yogyy.github.io/react-todo-drag-and-drop/',
    type: ['React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Moretti Store',
    description: 'Web Store integrated with payment gateway (midtrans)',
    github: 'https://github.com/yogyy/midtrans-coba2',
    type: ['Fullstack', 'TypeScript', 'PostgreSQL', 'Adonis', 'React', 'unocss'],
  },
  {
    title: 'Chatzzz',
    description: 'experiment chat app',
    github: 'https://github.com/yogyy/chatzzz',
    type: ['React', 'Firebase', 'Tailwind', 'Redux-Toolkit'],
  },
  {
    title: 'Fastky',
    description:
      'Fastify with Kysely for building a web application with a PostgreSQL database backend',
    github: 'https://github.com/yogyy/fastky',
    type: ['Fastify', 'TypeScript', 'PostgreSQL', 'Kysely', 'vitest'],
  },
  {
    title: 'Elsely',
    description:
      'Elysia with Kysely for building a web application with a PostgreSQL database backend.',
    github: 'https://github.com/yogyy/elsely',
    type: ['bun', 'PostgreSQL', ' Elysia', 'Kysely'],
  },
  {
    title: 'Spotify Activity',
    description: 'Spotify Activity Card like in the footer',
    url: '/spotify',
    type: ['SWR'],
  },
];

export { type ProjectCardSimple, smallProjects };

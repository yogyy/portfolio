/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com', 'i.scdn.co'],
    unoptimized: true,
  },
  modularizeImports: {
    'react-icons': {
      transform: 'react-icons/{{member}}',
    },
  },
};

module.exports = nextConfig;

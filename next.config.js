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
  transpilePackages: ['geist'],
};

module.exports = nextConfig;

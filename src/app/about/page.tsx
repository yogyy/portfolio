import Image from 'next/image';
import React from 'react';
import { Accent } from '@/components/accent';
import About from '@/components/clientComponent/about';
import IsLoaded from '@/components/Image/isLoaded';

export const metadata = {
  title: 'About me',
  description:
    'Muhammad Yogi Firman Syah is a Self-Tought Web Developer who based on West Java, Indonesia',
};

export default function AboutPage() {
  return (
    <>
      <About className="py-20 min-h-main" />
    </>
  );
}

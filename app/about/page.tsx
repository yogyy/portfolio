import React from 'react';
import ScrollUp from '../components/scrollup';
import About from '../components/clientComponent/about';

export const metadata = {
  title: 'About me',
  description:
    'Muhammad Yogi Firman Syah is a Self-Tought Web Developer who based on West Java, Indonesia',
};

export default function AboutPage() {
  return (
    <>
      <span className="mt-[58px]" />
      <About />
      <div className=""></div>
    </>
  );
}

import React from 'react';
import About from '../components/clientComponent/about';

export const metadata = {
  title: 'About me',
  description:
    'Muhammad Yogi Firman Syah is a Self-Tought Web Developer who based on West Java, Indonesia',
};

export default function AboutPage() {
  return (
    <section
      id="about"
      className="mt-[58px] min-h-main flex flex-col justify-center"
    >
      <About />
    </section>
  );
}

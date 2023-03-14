import Image from 'next/image';
import * as React from 'react';
import clsx from 'clsx';
import { Accent } from '@/components/accent';
import Layout from '@/components/layouts/Layout';
import useLoaded from '@/components/useLoaded';
import About from '@/components/clientComponent/about';

export default function AboutPage() {
  return (
    <Layout
      pageTitle="About | yogyy"
      content="yogyy is a Self-Tought Web Developer who based on West Java, Indonesia"
    >
      <About className="mt-nav min-h-main" />
    </Layout>
  );
}

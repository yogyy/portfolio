import * as React from 'react';
import About from '@/components/clientComponent/about';
import Layout from '../components/layouts/Layout';

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

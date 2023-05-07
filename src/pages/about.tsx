import * as React from 'react';
import About from '@/components/clientComponent/about';
import RootLayout from '@/components/layouts/layout';

export default function AboutPage() {
  return (
    <RootLayout
      pageTitle="About | yogyy"
      content="yogyy is a Self-Tought Web Developer who based on West Java, Indonesia"
    ><div className="pt-10"></div>
      <About className="mt-nav min-h-main" />
    </RootLayout>
  );
}

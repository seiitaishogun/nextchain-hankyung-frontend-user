import React from 'react';
import type { Metadata } from 'next';
import Layout from '@/app/m/components/Layout';
import Provider from '@/app/m/components/Provider';

export const metadata: Metadata = {
  title: '한국경제 운세',
  description: '한국경제 운세 서비스',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider>
      <Layout>{children}</Layout>
    </Provider>
  );
}

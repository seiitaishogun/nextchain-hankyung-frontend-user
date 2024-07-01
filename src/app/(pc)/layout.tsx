import React from 'react';
import Layout from '@/app/(pc)/components/Layout';
import Provider from '@/app/(pc)/components/Provider';

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

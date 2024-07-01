'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '@/app/(pc)/components/Layout/Header';
import Aside from '@/app/(pc)/components/Layout/Aside';
import Footer from '@/app/(pc)/components/Layout/Footer';

interface Props {
  children: React.ReactNode;
}

const RootLayout = styled.div``;

function Layout({ children }: Props) {
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  const handleToggleAside = () => {
    setIsAsideOpen(prev => !prev);
  };

  return (
    <RootLayout id="layout">
      <Header handleToggleAside={handleToggleAside} />
      <Aside isOpen={isAsideOpen} setIsOpen={setIsAsideOpen} />
      <main id="main">{children}</main>
      <Footer />
    </RootLayout>
  );
}

export default Layout;

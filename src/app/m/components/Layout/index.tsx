'use client';

import React, { useState } from 'react';
import Header from '@/app/m/components/Layout/Header';
import Navigation from '@/app/m/components/Layout/Navigation';
import Aside from '@/app/m/components/Layout/Aside';
import Footer from '@/app/m/components/Layout/Footer';
import TempFooter from '@/app/m/components/Layout/TempFooter';

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  const handleToggleAside = () => {
    setIsAsideOpen(prev => !prev);
  };

  return (
    <div id="layout">
      <Header isAsideOpen={isAsideOpen} handleToggleAside={handleToggleAside} />
      <Navigation />
      <Aside isOpen={isAsideOpen} setIsOpen={setIsAsideOpen} />
      <main id="main">{children}</main>
      <Footer />
      <TempFooter />
    </div>
  );
}

export default Layout;

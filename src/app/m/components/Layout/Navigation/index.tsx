'use client';

import NavigationMenu from '@/app/m/components/Layout/Navigation/Menu';
import { NavigationLayout as Layout } from '@/app/m/components/Layout/Navigation/styled';

function Navigation() {
  return (
    <Layout>
      <nav className="gnb">
        <NavigationMenu />
      </nav>
    </Layout>
  );
}

export default Navigation;

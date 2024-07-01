'use client';

import styled from 'styled-components';
import { Suspense } from 'react';
import Spinner from '@module/components/Common/Spinner';
import TextTitle from '@/app/(pc)/components/Title/TextTitle';
import Menu from '@/app/(pc)/categories/components/Menu';

const Layout = styled.section`
  width: ${props => props.theme.desktopDeviceWidth};
  margin: 20px auto 0;
  border-top: 4px solid ${props => props.theme.colors.black};

  .main-title {
    margin-top: 2px;
    padding-top: 24px;
    padding-bottom: 20px;
    border-bottom: 1px solid ${props => props.theme.colors.black};
  }
`;

function Category() {
  return (
    <Layout>
      <TextTitle className="main-title" text="카테고리" />

      <Suspense fallback={<Spinner />}>
        <Menu />
      </Suspense>
    </Layout>
  );
}

export default Category;

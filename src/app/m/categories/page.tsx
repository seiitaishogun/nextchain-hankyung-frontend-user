'use client';

import styled from 'styled-components';
import { Suspense } from 'react';
import Spinner from '@module/components/Common/Spinner';
import Title from '@/app/m/components/Title';
import Menu from '@/app/m/categories/components/Menu';

const Layout = styled.section`
  padding: 0 14px 20px;

  .main-title {
    margin-top: 15px;
    padding-bottom: 15px;
    border-bottom: 2px solid ${props => props.theme.colors.black};
  }
`;

function Category() {
  return (
    <Layout>
      <Title className="main-title" text="카테고리" />

      <Suspense fallback={<Spinner />}>
        <Menu />
      </Suspense>
    </Layout>
  );
}

export default Category;

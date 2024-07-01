'use client';

import styled from 'styled-components';
import React, { Suspense } from 'react';
import Spinner from '@module/components/Common/Spinner';
import MainGeneral from '@/app/m/components/Main/General';
import MainTop from '@/app/m/components/Main/Top';
import MainHealth from '@/app/m/components/Main/Health';
import MainLove from '@/app/m/components/Main/Love';
import MainToday from '@/app/m/components/Main/Today';
import List from '@/app/m/components/List';
import { MAIN_MONEY_LAST } from '@/app/m/data/main';
import DiscountModal from './Main/Modal';

const Layout = styled.div`
  padding: 0 14px;
  border-bottom: 2px solid ${props => props.theme.colors.black};
`;

function Home() {
  return (
    <Layout>
      <DiscountModal />
      <Suspense fallback={<Spinner />}>
        <MainGeneral />
      </Suspense>

      {/*
      <Suspense fallback={<Spinner />}>
        <MoneySection data={MAIN_MONEY_TOP} />
      </Suspense>
      */}

      <Suspense fallback={<Spinner />}>
        <MainToday />
      </Suspense>

      <List size="medium" data={MAIN_MONEY_LAST} />

      <Suspense fallback={<Spinner />}>
        <MainHealth />
      </Suspense>

      <Suspense fallback={<Spinner />}>
        <MainTop />
      </Suspense>

      <Suspense fallback={<Spinner />}>
        <MainLove />
      </Suspense>
    </Layout>
  );
}

export default Home;

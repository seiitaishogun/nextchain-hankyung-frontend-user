'use client';

import styled from 'styled-components';
import TopBanner from '@/app/(pc)/components/Main/TopBanner';
import SubBanner from '@/app/(pc)/components/Main/SubBanner';
import RankList from '@/app/(pc)/components/Main/RankList';
import RowList from '@/app/(pc)/components/Main/RowList';
import ColumnList from '@/app/(pc)/components/Main/ColumnList';
import TodayList from '@/app/(pc)/components/Main/TodayList';
import DiscountModal from '@/app/(pc)/components/Main/Modal';

const Layout = styled.section`
  padding: 36px 0 50px;
`;

function Home() {
  return (
    <Layout>
      <DiscountModal />
      <TopBanner />
      <SubBanner />
      <RankList title="오늘 많이 봤어요" />
      <RowList />
      <ColumnList />
      <TodayList />
    </Layout>
  );
}

export default Home;

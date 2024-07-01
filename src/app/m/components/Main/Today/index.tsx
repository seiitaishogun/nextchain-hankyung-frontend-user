import styled from 'styled-components';
import { useState } from 'react';
import Title from '@/app/m/components/Title';
import ContentInfo from '@/app/m/components/Main/Today/ContentInfo';
import TodaySwiper from '@/app/m/components/Main/Today/SwipeList';
import { TODAY_DATA } from '@/app/m/data/main';

const Layout = styled.article`
  overflow: hidden;
  margin: 0 -14px;
  padding: 16px 0 20px;
  background: #f3f3f3;

  .title {
    width: calc(100% - 28px);
    margin: 0 auto;
    padding: 0 0 16px;
    border-bottom: 2px solid ${props => props.theme.colors.black};
  }
`;

function MainToday() {
  const [tab, setTab] = useState(0);

  /**
   const { data } = useQuery(['mainToday'], fetchMainToday, {
   select: res => res.data,
   suspense: true,
   });
   */

  const currentData = (TODAY_DATA || [])[tab] || {};

  return (
    <Layout>
      <Title
        text="한국경제 무료 운세"
        linkOptions={{
          href: '/m/categories/3',
        }}
      />

      <ContentInfo data={currentData} />
      {TODAY_DATA && (
        <TodaySwiper data={TODAY_DATA} tab={tab} setTab={setTab} />
      )}
    </Layout>
  );
}

export default MainToday;

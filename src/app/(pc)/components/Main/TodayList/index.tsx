import styled from 'styled-components';
import { useState } from 'react';
import ContentInfo from '@/app/(pc)/components/Main/TodayList/ContentInfo';
import TodaySwiper from '@/app/(pc)/components/Main/TodayList/SwipeList';
import { TODAY_DATA } from '@/app/(pc)/data/main';
import Title from '@/app/(pc)/components/Title';

const Layout = styled.article`
  overflow: hidden;
  width: ${props => props.theme.desktopDeviceWidth};
  margin: 0 auto;
  margin-top: 30px;
  border-top: 4px solid ${props => props.theme.colors.black};
  background: #f8f4fc;

  .title {
    display: flex;
    justify-content: center;
    margin-top: 2px;
    padding: 20px 0;
    border-top: 1px solid ${props => props.theme.colors.black};
    border-bottom: 4px solid ${props => props.theme.colors.black};
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
      <Title text="한국경제 무료 운세" href="/categories/3" />

      <ContentInfo data={currentData} />
      {TODAY_DATA && (
        <TodaySwiper data={TODAY_DATA} tab={tab} setTab={setTab} />
      )}
    </Layout>
  );
}

export default MainToday;

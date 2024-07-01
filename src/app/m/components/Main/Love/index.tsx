import styled from 'styled-components';
import LoveSection from '@/app/m/components/Main/Love/Section';
import SwipeList from '@/app/m/components/SwipeList';
import { MAIN_LOVE_DATA } from '@/app/m/data/main';

const Layout = styled.article`
  margin: 0 -14px 0;
  padding: 16px 14px;
  background: #f8f4fc;
`;

function MainLove() {
  /**
   const { data } = useQuery(['mainLove'], fetchMainLove, {
   select: res => res.data,
   suspense: true,
   });
   */

  const firstData = (MAIN_LOVE_DATA || [])[0];
  const otherData = (MAIN_LOVE_DATA || []).slice(1);

  return (
    <Layout>
      {firstData && <LoveSection data={firstData} />}
      <SwipeList size="medium" data={otherData} />
    </Layout>
  );
}

export default MainLove;

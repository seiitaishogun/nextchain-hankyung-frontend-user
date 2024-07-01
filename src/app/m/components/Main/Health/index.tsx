import styled from 'styled-components';
import useContentList from '@module/hooks/content/useContentList';
import SwipeList from '@/app/m/components/HealthSwipeList';

const Layout = styled.article`
  padding-top: 16px;
  padding-bottom: 16px;
  border-top: 2px solid ${props => props.theme.colors.black};

  .title {
    padding-bottom: 10px;
  }
`;

function MainHealth() {
  /**
   const { data } = useQuery(['mainHealth'], fetchMainHealth, {
   select: res => res.data,
   suspense: true,
   });
   */
  const healthList = useContentList({ limit: 4 });
  return (
    <Layout>
      {healthList.data && <SwipeList size="large" data={healthList.data} />}
    </Layout>
  );
}

export default MainHealth;

import styled from 'styled-components';
import useContentList from '@module/hooks/content/useContentList';
import Title from '../../Title';
import List from './List';

const Layout = styled.article`
  padding-top: 16px;
  border-top: 2px solid ${props => props.theme.colors.black};

  .title {
    border-bottom: 1px solid ${props => props.theme.colors.gray100};
  }
`;

function MainTop() {
  /**
  const { data } = useQuery(['mainTop'], fetchMainTop, {
    select: res => res.data,
    suspense: true,
  });
  */
  const rankList = useContentList({ limit: 5 });
  return (
    <Layout>
      <Title text="오늘 많이 봤어요" />
      {rankList.data && <List data={rankList.data} />}
    </Layout>
  );
}

export default MainTop;

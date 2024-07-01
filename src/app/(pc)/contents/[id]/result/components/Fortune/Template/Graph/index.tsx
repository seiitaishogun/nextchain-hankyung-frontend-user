import styled from 'styled-components';
import { ChildrenDataT } from '@module/types/content/fortune';

interface Props {
  items: ChildrenDataT[];
}

const Layout = styled.div`
  display: grid;
  grid-template-columns: 30px auto;
  align-items: end;
  position: relative;
  box-sizing: border-box;
  padding: 0 5px;
`;

const LeftBox = styled.div`
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  height: 230px;
  padding-bottom: 10px;
  font-family: ${props => props.theme.fontFamilies.inner};
  font-size: 15px;
  line-height: normal;
  text-align: center;
  color: ${props => props.theme.colors.placeholder};

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const RightBox = styled.div<{ count: number }>`
  display: grid;
  grid-template-columns: repeat(${props => props.count}, 1fr);
  justify-content: space-between;
  align-items: end;
  min-height: 223px;
  margin: 0 14px;
  background: repeating-linear-gradient(
    ${props => props.theme.colors.white},
    ${props => props.theme.colors.white} 31px,
    ${props => props.theme.colors.gray200} 33px
  );
`;

const GraphItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: ${props => props.theme.colors.placeholder};
  text-align: center;
`;

const GraphScore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 30px;
  border-radius: 4px;
  background-color: ${props => props.theme.colors.gray200};
  font-size: 15px;
  font-weight: bold;
`;

const GraphBar = styled.div<{ height: number; $isMaxScore: boolean }>`
  width: 46px;
  height: ${props => props.height}px;
  margin-top: 9px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  background-color: ${props =>
    props.$isMaxScore
      ? props.theme.colors.primary
      : props.theme.colors.placeholder};
`;

const GraphName = styled.div`
  height: 24px;
  margin-top: 9px;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
`;

function Graph({ items }: Props) {
  const maxScoreId = items.sort(
    (a, b) => Number(b.contents) - Number(a.contents)
  )[0].id;

  const getGraphBarHeight = (score: number) => {
    const height = (score / 100) * 200;
    return height > 200 ? 200 : height;
  };

  return (
    <Layout>
      <LeftBox>
        <div>100</div>
        <div>80</div>
        <div>60</div>
        <div>40</div>
        <div>20</div>
        <div>0</div>
      </LeftBox>

      <RightBox count={items.length}>
        {items.map(item => (
          <GraphItem key={item.id}>
            <GraphScore>{item.contents}</GraphScore>
            <GraphBar
              height={getGraphBarHeight(Number(item.contents) || 0)}
              $isMaxScore={item.id === maxScoreId}
            />
            <GraphName>{item.name}</GraphName>
          </GraphItem>
        ))}
      </RightBox>
    </Layout>
  );
}

export default Graph;

import React from 'react';
import styled from 'styled-components';
import { ChildrenDataT } from '@module/types/content/fortune';

interface Props {
  items: ChildrenDataT[];
}

const Layout = styled.div<{ $itemCount: number }>`
  display: flex;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  margin-top: 25px !important;

  .score-item {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    > div {
      line-height: normal;
    }

    > div:first-child {
      font-size: 20px;
      font-weight: bold;
      color: ${props => props.theme.colors.placeholder};
    }

    > div:last-child {
      margin-top: 16px;
      font-size: 30px;
      font-weight: 800;
      color: ${props => props.theme.colors.primary};
    }
  }
`;

function ScoreItems({ items }: Props) {
  return (
    <Layout $itemCount={items.length}>
      {items.map(item => (
        <div className="score-item" key={item.id}>
          <div dangerouslySetInnerHTML={{ __html: item.name || '' }} />
          <div dangerouslySetInnerHTML={{ __html: `${item.summary}점` }} />
        </div>
      ))}
    </Layout>
  );
}

export default ScoreItems;

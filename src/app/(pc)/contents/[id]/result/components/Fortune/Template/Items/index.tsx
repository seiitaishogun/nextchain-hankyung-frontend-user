import React from 'react';
import styled from 'styled-components';
import { ChildrenDataT } from '@module/types/content/fortune';

interface Props {
  items: ChildrenDataT[];
}

const Layout = styled.div<{ $itemCount: number }>`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(${props => props.$itemCount}, 1fr);
  width: 100%;
  padding: 0;
  box-sizing: border-box;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  h5 {
    font-size: 20px;
    font-weight: bold;
    line-height: normal;
    color: ${props => props.theme.colors.placeholder};
  }

  p {
    margin-top: 16px;
    font-size: 46px;
    font-weight: 800;
    line-height: normal;
    color: ${props => props.theme.colors.primary};
  }
`;

function Items({ items }: Props) {
  return (
    <Layout $itemCount={items.length}>
      {items.map(item => (
        <div key={item.id}>
          <h5 dangerouslySetInnerHTML={{ __html: item.name || '' }} />
          <p dangerouslySetInnerHTML={{ __html: item.contents || '' }} />
        </div>
      ))}
    </Layout>
  );
}

export default Items;

import styled from 'styled-components';
import Small from '@/app/(pc)/components/List/Item/Small';
import Medium from '@/app/(pc)/components/List/Item/Medium';
import { MainProps } from '@/app/(pc)/components/Main/types';

interface ListProps extends MainProps {
  size: 'small' | 'medium';
}

const ListLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

function List({ size, data }: ListProps) {
  const renderListItem = () => {
    switch (size) {
      case 'small':
        return data.map((d, i) => {
          const order = i + 1;
          return <Small key={d.id} data={d} order={order} />;
        });
      case 'medium':
        return data.map(d => <Medium key={d.id} data={d} />);
      default:
        return null;
    }
  };

  const listItems = renderListItem();

  return <ListLayout className="list-layout">{listItems}</ListLayout>;
}

export default List;

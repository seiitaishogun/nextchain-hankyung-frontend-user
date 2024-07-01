import styled from 'styled-components';
import { ContentListLimit } from '@module/types/content/list';
import Item from './Item/Item';

interface ListProps {
  data: ContentListLimit[];
}

const ListLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

function List({ data }: ListProps) {
  const renderListItem = () =>
    data.map((d, i) => {
      const order = i + 1;
      return <Item key={d.id} data={d} order={order} />;
    });

  const listItems = renderListItem();

  return <ListLayout className="list-layout">{listItems}</ListLayout>;
}

export default List;

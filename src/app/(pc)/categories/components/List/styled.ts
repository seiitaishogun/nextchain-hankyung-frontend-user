import styled from 'styled-components';
import {
  ListDescription,
  ListName,
  ListViewCount,
} from '@/app/(pc)/components/List/styled';

const ListLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`;

const ListItemLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 50px;

  &:first-child {
    margin-top: 0;
  }
`;

const ListItemDetailBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  width: calc(100% - 142px);

  ${ListName} {
    margin-top: 0;
  }

  ${ListDescription} {
    width: 100%;
    margin-top: 6px !important;
    padding: 0;
  }

  ${ListViewCount} {
    margin-top: 8px !important;
  }
`;

export { ListLayout, ListItemLayout, ListItemDetailBox };

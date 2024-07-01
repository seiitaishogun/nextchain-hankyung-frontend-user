import styled from 'styled-components';
import {
  ContentName as Name,
  ContentBanner as Banner,
} from '@/app/m/contents/[id]/components/Header/styled';

const ContentResultHeaderLayout = styled.div`
  padding-top: 32px;
`;

const ContentName = styled(Name)`
  margin-top: 12px;
  text-align: center;
`;

const ContentBanner = styled(Banner)`
  margin-top: 20px;
`;

export { ContentResultHeaderLayout, ContentName, ContentBanner };

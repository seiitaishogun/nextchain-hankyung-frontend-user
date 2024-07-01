import styled from 'styled-components';
import {
  ContentName as Name,
  ContentBanner as Banner,
} from '@/app/(pc)/contents/[id]/components/Header/styled';

const ContentResultHeaderLayout = styled.div`
  padding-top: 32px;
`;

const ContentName = styled(Name)`
  margin-top: 18px;
  text-align: center;
`;

const ContentBanner = styled(Banner)`
  margin-top: 24px;
`;

export { ContentResultHeaderLayout, ContentName, ContentBanner };

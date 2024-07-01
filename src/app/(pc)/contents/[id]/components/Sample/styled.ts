import styled from 'styled-components';
import { ContentResultHeaderLayout } from '@/app/(pc)/contents/[id]/result/components/Saju/Header/styled';

const SampleLayout = styled.div`
  width: ${props => props.theme.contentWidth};

  .layer-popup {
    width: ${props => props.theme.contentWidth};
    max-width: ${props => props.theme.contentWidth};
    min-width: ${props => props.theme.contentWidth};

    .header-wrap {
      width: ${props => props.theme.contentWidth};
      max-width: ${props => props.theme.contentWidth};
      min-width: ${props => props.theme.contentWidth};
    }
  }

  ${ContentResultHeaderLayout} {
    padding-top: 20px;
  }
`;

const SampleBox = styled.div`
  padding: 20px 16px 40px;

  img {
    width: 100% !important;
    height: auto !important;
    position: relative !important;
    object-fit: fill;
  }
`;

export { SampleLayout, SampleBox };

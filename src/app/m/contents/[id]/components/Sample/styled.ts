import styled from 'styled-components';
import { ContentResultHeaderLayout } from '@/app/m/contents/[id]/result/components/Saju/Header/styled';

const SampleLayout = styled.div`
  width: 100%;
  max-width: ${props => props.theme.maxDeviceWidth};
  min-width: ${props => props.theme.minDeviceWidth};
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

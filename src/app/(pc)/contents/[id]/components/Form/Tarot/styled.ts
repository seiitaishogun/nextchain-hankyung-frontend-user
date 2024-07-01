import styled from 'styled-components';
import {
  HEIGHT,
  WIDTH,
} from '@/app/(pc)/contents/[id]/components/Form/Tarot/Card/constants';

const CardSection = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;
  margin-top: 40px;

  .swiper {
    overflow: visible !important;
    width: ${WIDTH}px;
    height: ${HEIGHT}px;
    margin-top: 30px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

    .swiper-slide {
      overflow: visible;

      &.swiper-slide-active {
        scale: 1;
      }
    }
  }
`;

export { CardSection };

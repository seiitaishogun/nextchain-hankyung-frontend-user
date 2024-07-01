import styled, { css } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import { ContentListLimit } from '@module/types/content/list';

import 'swiper/css';
import 'swiper/css/navigation';
import Medium from './Item/Medium';
import Large from './Item/Large';

interface SwipeListProps {
  data: ContentListLimit[];
  size: 'medium' | 'large';
}

const Layout = styled.div<{ size: 'medium' | 'large' }>`
  margin-right: -14px;

  .swiper-slide {
    ${props =>
      props.size === 'medium' &&
      css`
        min-width: 195px;
        max-width: 195px;
      `}

    ${props =>
      props.size === 'large' &&
      css`
        min-width: 271px;
        max-width: 271px;
      `}
  }
`;

function SwiperList({ size, data }: SwipeListProps) {
  const renderListItem = () => {
    switch (size) {
      case 'medium':
        return data.map(d => (
          <SwiperSlide key={d.id}>
            <Medium data={d} />
          </SwiperSlide>
        ));
      case 'large':
        return data.map(d => (
          <SwiperSlide key={d.id}>
            <Large data={d} />
          </SwiperSlide>
        ));
      default:
        return null;
    }
  };

  const listItem = renderListItem();

  return (
    <Layout size={size}>
      <Swiper
        freeMode
        slidesPerView="auto"
        spaceBetween={12}
        modules={[FreeMode]}
      >
        {listItem}
      </Swiper>
    </Layout>
  );
}

export default SwiperList;

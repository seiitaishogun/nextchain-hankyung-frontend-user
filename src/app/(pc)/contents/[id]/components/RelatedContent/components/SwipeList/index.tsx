import styled, { css } from 'styled-components';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ReactNode } from 'react';
import { ContentRelatedList } from '@module/types/content/detail';
import 'swiper/css';
import 'swiper/css/navigation';
import Medium from './Item/Medium';
import Large from './Item/Large';

interface SwipeListProps {
  data: ContentRelatedList[];
  size: 'medium' | 'large';
  title: ReactNode;
  showCategoryName?: boolean;
}

const Layout = styled.div<{ size: 'medium' | 'large' }>`
  margin-right: -14px;
  width: calc(257px * 3 + 34px);

  h2 {
    width: ${props => props.theme.contentWidth};
    font-size: 20px;
    font-weight: 700;
    color: #121212;
    margin-top: 20px;
    padding: 14px 0px;
    border-top: 2px solid #000000;
    span {
      color: #142c67;
    }
  }

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
        min-width: 257px;
        max-width: 257px;
      `}
  }
`;

function SwiperList({ size, data, title, showCategoryName }: SwipeListProps) {
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
            <Large data={d} showCategoryName={showCategoryName} />
          </SwiperSlide>
        ));
      default:
        return null;
    }
  };

  const listItem = renderListItem();

  return (
    <Layout size={size}>
      {title}
      {data.length > 0 ? (
        <Swiper
          freeMode
          slidesPerView="auto"
          spaceBetween={17}
          modules={[FreeMode]}
        >
          {listItem}
        </Swiper>
      ) : null}
    </Layout>
  );
}

export default SwiperList;

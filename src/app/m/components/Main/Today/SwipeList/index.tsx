import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import TodaySwiperItem from '@/app/m/components/Main/Today/SwipeList/item';
import { TodaySwiperProps } from '@/app/m/components/Main/Today/SwipeList/types';
import { TodaySwiperLayout } from '@/app/m/components/Main/Today/SwipeList/styled';

import 'swiper/css';
import 'swiper/css/pagination';

function TodaySwiper({ data, tab, setTab }: TodaySwiperProps) {
  const swiperRef = useRef<any>(null);

  return (
    <TodaySwiperLayout>
      <Swiper
        onInit={swiper => {
          swiperRef.current = swiper;
        }}
        slidesPerView={2.5}
        spaceBetween={10}
        centeredSlides
        // loop
        autoplay={{
          delay: 1000,
        }}
        pagination={{
          clickable: false,
        }}
        modules={[Pagination, Autoplay]}
        onSlideChange={swiper => {
          setTab(swiper.activeIndex);
        }}
        onSwiper={swiper => swiper.slideTo(tab)}
      >
        {data.map(d => (
          <SwiperSlide key={d.id}>
            <TodaySwiperItem data={d} />
          </SwiperSlide>
        ))}
      </Swiper>
    </TodaySwiperLayout>
  );
}

export default TodaySwiper;

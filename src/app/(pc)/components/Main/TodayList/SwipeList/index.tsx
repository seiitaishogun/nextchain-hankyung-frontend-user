import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import TodaySwiperItem from '@/app/(pc)/components/Main/TodayList/SwipeList/item';
import { TodaySwiperProps } from '@/app/(pc)/components/Main/TodayList/SwipeList/types';
import { TodaySwiperLayout } from '@/app/(pc)/components/Main/TodayList/SwipeList/styled';

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
        slidesPerView={4}
        spaceBetween={20}
        centeredSlides
        // loop
        autoplay={{
          delay: 2000,
        }}
        modules={[Autoplay]}
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

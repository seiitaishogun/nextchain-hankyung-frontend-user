import styled from 'styled-components';

const TodaySwiperLayout = styled.div`
  margin-top: 18px;

  .swiper {
    overflow: visible;
    width: 800px;
    height: 200px;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide .swiper-item {
    display: flex;
    align-items: center;
    overflow: hidden;
    width: 114px;
    height: 144px;

    a {
      display: block;
      width: 100%;
      height: 114px;
    }

    img {
      display: block;
      overflow: hidden;
      position: relative !important;
      width: 100%;
      height: 100px;
      border-radius: 50%;
      object-fit: fill;
    }
  }

  .swiper-slide-active .swiper-item {
    width: 144px !important;
    height: 144px !important;

    img,
    a {
      width: 144px !important;
      height: 144px !important;
    }
  }

  .swiper-pagination {
    bottom: -30px;
  }
`;

export { TodaySwiperLayout };

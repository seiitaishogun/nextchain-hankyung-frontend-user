import styled from 'styled-components';

const TodaySwiperLayout = styled.div`
  margin-top: 20px;
  padding-bottom: 33px;

  .swiper-wrapper {
    margin-right: 10px;
    height: 155px;
  }

  .swiper {
    overflow: visible;
    width: 100%;
    // max-width: 750px;
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
    width: 155px;
    height: 155px;

    a {
      display: block;
      width: 100%;
      height: 100%;
    }

    img {
      display: block;
      overflow: hidden;
      position: relative !important;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: fill;
    }
  }
`;

export { TodaySwiperLayout };

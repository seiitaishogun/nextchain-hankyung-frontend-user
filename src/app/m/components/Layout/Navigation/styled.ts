import styled from 'styled-components';

const NavigationLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 35px;
  left: 0;
  z-index: 99;
  box-sizing: border-box;
  width: 100%;
  height: 45px;

  .gnb {
    display: flex;
    align-items: center;
    overflow: hidden;
    width: 100%;
    max-width: ${props => props.theme.maxDeviceWidth};
    height: 100%;
    background: ${props => props.theme.colors.white};
    white-space: nowrap;

    &::before,
    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      z-index: 99;
      width: 15px;
      height: 50px;
    }

    &::before {
      left: 0;
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 0.75) 51%,
        rgba(255, 255, 255, 0) 100%
      );
    }

    &::after {
      width: 25px;
      right: 0;
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.75) 51%,
        rgba(255, 255, 255, 1) 100%
      );
    }

    .swiper {
      height: 100%;
      padding: 0 15px;
    }

    .swiper-slide {
      display: flex;
      align-items: center;
      width: auto;
      font-size: 16px;
      font-weight: 500;
      color: ${props => props.theme.colors.black100};

      &.active a {
        color: ${props => props.theme.colors.primary};
      }

      &.category-new a {
        position: relative;

        &::after {
          content: 'NEW';
          overflow: hidden;
          position: absolute;
          top: -13px;
          right: -17px;
          font-size: 13px;
          font-weight: 500;
          color: ${props => props.theme.colors.red};
        }
      }

      &.category-free a {
        position: relative;

        &::after {
          content: 'FREE';
          overflow: hidden;
          position: absolute;
          top: -13px;
          right: -17px;
          font-size: 13px;
          font-weight: 500;
          color: #1a2d63;
        }
      }

      &.category-sale a {
        position: relative;

        &::after {
          content: 'SALE';
          overflow: hidden;
          position: absolute;
          top: -13px;
          right: -17px;
          font-size: 13px;
          font-weight: 500;
          color: ${props => props.theme.colors.red};
        }
      }
    }
  }
`;

export { NavigationLayout };

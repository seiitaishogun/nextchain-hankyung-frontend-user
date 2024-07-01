import styled, { css } from 'styled-components';

const ContentFooterLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 90;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 20px 14px;
  background: ${props => props.theme.colors.white};
`;

const ContentFooterBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: ${props => props.theme.maxDeviceWidth};
  min-width: ${props => props.theme.minDeviceWidth};
`;

const LikeButton = styled.button<{ $isLike: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-sizing: border-box;
  width: 55px;
  height: 55px;
  padding: 0;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  background: url(${props =>
      `${props.theme.imageUrl}/m/common/like_off_icon.svg`})
    no-repeat center center #ffffff;
  background-size: 25px 25px;
  text-indent: -9999px;

  ${props =>
    props.$isLike &&
    css`
      background-image: url(${`${props.theme.imageUrl}/m/common/like_on_icon.svg`});
    `};
`;

const ShareButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: calc(100% - 65px);
  height: 55px;
  border-radius: 16px;
  background: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fontFamilies.inner};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.32px;
  color: ${props => props.theme.colors.white};
`;

export { ContentFooterLayout, ContentFooterBox, LikeButton, ShareButton };

import styled, { css } from 'styled-components';

const ContentHeaderLayout = styled.section`
  padding: 32px 14px 0;
`;

const ContentCategory = styled.div<{ $isUnderline?: boolean }>`
  font-size: 16px;
  font-weight: normal;
  color: ${props => props.theme.colors.black100};
  line-height: 21px;

  ${props =>
    props.$isUnderline &&
    css`
      padding-bottom: 16px;
      border-bottom: 2px solid ${props.theme.colors.black100};
    `}
`;

const ContentName = styled.h2`
  margin-top: 16px;
  font-size: 24px;
  font-weight: bold;
  color: ${props => props.theme.colors.black100};
  line-height: 29px;
`;

const ContentCount = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
`;

const ContentCountItem = styled.div<{ image: string }>`
  margin-right: 12px;
  padding-left: 20px;
  background: url(${props => props.image}) no-repeat left center;
  background-size: 16px 16px;
  font-size: 16px;
  font-weight: normal;
  color: ${props => props.theme.colors.black100};
  line-height: 14px;

  &:last-child {
    margin-right: 0;
  }
`;

const ContentVariety = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
`;

const ContentPreviewButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 127px;
  height: 38px;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 100px;
  font-size: 16px;
  font-family: ${props => props.theme.fontFamilies.inner};
  font-weight: 600;
  color: ${props => props.theme.colors.primary};
  letter-spacing: -0.32px;
`;

const ContentButtonBox = styled.div`
  display: flex;
`;

const ContentVarietyButton = styled.button`
  overflow: hidden;
  width: 38px;
  height: 38px;
  margin-right: 4px;
  padding: 7px;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 24px 24px;
  text-indent: -9999px;

  &:last-child {
    margin-right: 0;
  }
`;

const ContentLikeButton = styled(ContentVarietyButton)<{ $isLike: boolean }>`
  background-image: url(${props =>
    `${props.theme.imageUrl}/m/common/like_black_icon.svg`});

  ${props =>
    props.$isLike &&
    css`
      background-image: url('${props.theme
        .imageUrl}/m/common/like_on_icon.svg');
    `}
`;

const ContentShareButton = styled(ContentVarietyButton)`
  background-image: url(${props =>
    `${props.theme.imageUrl}/m/common/share_black_icon.svg`});
`;

const ContentBanner = styled.div`
  overflow: hidden;
  width: 100%;
  height: 194px;
  margin-top: 16px;
  border-radius: 10px;

  img {
    width: 100%;
    height: 100%;
    position: relative !important;
    object-fit: fill;
  }
`;

const ContentDescription = styled.div`
  overflow: hidden;
  margin-top: 16px;
  font-size: 18px;
  font-weight: normal;
  line-height: 22px;
  color: ${props => props.theme.colors.black100};
  white-space: pre-wrap;
`;

export {
  ContentHeaderLayout,
  ContentCategory,
  ContentName,
  ContentCount,
  ContentCountItem,
  ContentVariety,
  ContentPreviewButton,
  ContentButtonBox,
  ContentVarietyButton,
  ContentBanner,
  ContentDescription,
  ContentLikeButton,
  ContentShareButton,
};

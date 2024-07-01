import styled, { css } from 'styled-components';

const ListThumbnail = styled.div`
  overflow: hidden;
  width: 100%;
  height: 194px;
  border-radius: 10px;

  a {
    width: 100%;
    height: 100%;
  }

  img {
    position: relative !important;
    width: 100%;
    height: 100%;
    object-fit: fill;
    object-position: top;
  }
`;

const ListLargeThumbnail = styled.div`
  overflow: hidden;
  width: auto;
  height: 200px;
  margin: 0 -14px;
  border-radius: 0 !important;

  a {
    width: 100%;
    height: 100%;
  }

  img {
    position: relative !important;
    width: 100%;
    height: 100%;
    object-fit: fill;
    object-position: top;
  }
`;

const ListSmallThumbnail = styled.div`
  overflow: hidden;
  width: 77px;
  height: 48px;
  border-radius: 10px;

  a {
    width: 100%;
    height: 100%;
  }

  img {
    position: relative !important;
    width: 100%;
    height: 100%;
    object-fit: fill;
    object-position: top;
  }
`;

const ListSmallSquareThumbnail = styled.div`
  overflow: hidden;
  width: 77px;
  height: 77px;
  border-radius: 10px;

  a {
    width: 100%;
    height: 100%;
  }

  img {
    position: relative !important;
    width: 100%;
    height: 100%;
    object-fit: fill;
    object-position: top;
  }
`;

const ListName = styled.h4<{ $isNew?: boolean }>`
  font-size: 16px;
  font-weight: bold;
  line-height: 19px;

  a {
    display: flex;
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: wrap;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  ${props =>
    props.$isNew &&
    css`
      a {
        display: flex;
        align-items: center;
      }
      span {
        display: inline-block;
        position: relative;
        overflow: hidden;
        width: auto;
        max-width: calc(100% - 40px);
        vertical-align: top;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      a::after {
        content: 'NEW';
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        height: 23px;
        margin-left: 5px;
        padding: 0 6px;
        background: ${props.theme.colors.red};
        font-size: 13px;
        font-weight: 500;
        color: ${props.theme.colors.white};
      }
    `}
`;

const ListLargeName = styled(ListName)`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
  padding-top: 15px;
  font-size: 24px;
  line-height: 29px;
`;

const ListSummary = styled.p`
  margin-top: 8px;
  font-size: 18px;
  line-height: 22px;

  a {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const ListDescription = styled(ListSummary)`
  box-sizing: border-box;
  width: calc(100% - 77px);
  height: 44px;
  line-height: 22px;

  a {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding-right: 20px;
    white-space: normal;
  }
`;

const ListViewCount = styled.div`
  padding-left: 20px;
  font-size: 16px;
  font-weight: bold;
  line-height: 19px;
  background: url(${props =>
      `${props.theme.imageUrl}/m/common/view_gray_icon.svg`})
    no-repeat left center;
  background-size: 16px 16px;

  a {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
  }
`;

const ListDateBox = styled.div`
  margin-top: 8px;
  font-size: 16px;
  font-weight: normal;
  line-height: 22px;
  color: ${props => props.theme.colors.black100};
`;

export {
  ListThumbnail,
  ListLargeThumbnail,
  ListSmallThumbnail,
  ListSmallSquareThumbnail,
  ListName,
  ListSummary,
  ListLargeName,
  ListDescription,
  ListViewCount,
  ListDateBox,
};

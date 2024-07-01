import styled from 'styled-components';

const UserInfoLayout = styled.div`
  margin-top: 16px;
`;

const UserInfoItem = styled.div`
  margin-top: 8px;
  text-align: left;
  font-size: 16px;
  font-weight: 500;
  line-height: 26px;
  color: ${props => props.theme.colors.placeholder};

  &:first-child {
    margin-top: 0;
  }
`;

const SajuInfoButton = styled.button`
  margin-left: 5px;
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.theme.colors.primary};
  line-height: 17px;
`;

const PreviewSajuSectionLayout = styled.div`
  margin-top: 10px;
  padding-bottom: 6px;
`;

const SajuSectionLayout = styled.div`
  margin-top: 25px;
`;

const GridHeaderBox = styled.div<{ count: number }>`
  display: grid;
  grid-template-columns: repeat(${props => props.count}, 1fr);
  place-items: center;
  padding: 6px 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  color: ${props => props.theme.colors.placeholder};
`;

const GridHeaderBgBox = styled(GridHeaderBox)`
  height: 35px;
  border-radius: 14px;
  background-color: #f6f6f6;
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.theme.colors.black100};
`;

const GridBox = styled.div<{ count: number }>`
  display: grid;
  grid-template-columns: repeat(${props => props.count}, 1fr);
  grid-gap: 8px;
  place-items: center;
  margin-top: 12px;
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;

  span {
    text-align: center;
  }

  span:first-child {
    font-size: 16px;
    font-weight: bold;
    line-height: 19px;
    color: ${props => props.theme.colors.black100};
  }

  span:last-child {
    margin-top: 4px;
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    color: ${props => props.theme.colors.placeholder};
  }
`;

const GridBgItem = styled.div<{ $color: { text: string; bg: string } }>`
  display: flex;
  flex-direction: column;
  place-items: center;
  width: 64px;
  height: 64px;
  border-radius: 14px;
  background-color: ${props => props.$color?.bg};
  color: ${props => props.$color?.text};

  @media (max-width: 320px) {
    width: 45px;
    height: 45px;
    border-radius: 10px;
  }

  span:first-child {
    font-size: 24px;
    font-weight: bold;
    line-height: 41px;

    @media (max-width: 320px) {
      font-size: 20px;
      line-height: 29px;
    }
  }

  span:last-child {
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;

    @media (max-width: 320px) {
      font-size: 12px;
      line-height: 14px;
    }
  }
`;
const MessageBox = styled.p`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${props => props.theme.colors.gray100};
  margin-top: 25px;
  padding: 25px 0;
  text-align: center;
  font-size: 16px;
  line-height: 19px;
  color: ${props => props.theme.colors.black100};

  strong {
    margin-bottom: 17px;
  }
`;

const DaeunSection = styled.section``;

export {
  UserInfoLayout,
  UserInfoItem,
  SajuInfoButton,
  SajuSectionLayout,
  DaeunSection,
  PreviewSajuSectionLayout,
  MessageBox,
  GridHeaderBox,
  GridHeaderBgBox,
  GridBox,
  GridItem,
  GridBgItem,
};

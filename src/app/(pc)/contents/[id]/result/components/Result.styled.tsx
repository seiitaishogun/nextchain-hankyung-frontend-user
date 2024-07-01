import styled, { css } from 'styled-components';

const PaddingBox = styled.div`
  padding: 0 16px;
`;

const ResultLayout = styled.section`
  width: ${props => props.theme.contentWidth};
  margin: 0 auto;
  padding-bottom: 35px;
`;

const DataLayout = styled.div`
  margin-top: 15px;

  &:first-child {
    margin-top: 0;
  }

  > div {
    margin-top: 26px;

    &:first-child {
      margin-top: 0;
    }
  }
`;

const ChildLayout = styled.div<{ sign?: string | null }>`
  margin-top: 35px;
  text-align: center;

  &:first-child {
    margin-top: 0;
  }

  > h4 {
    font-size: 20px;
    font-weight: bold;
    line-height: normal;
    color: ${props => props.theme.colors.black100};

    ${props =>
      props.sign &&
      css`
        padding-bottom: 108px;
        background: url('${props.theme
            .imageUrl}/pc/content/icon/${props.sign}.webp')
          no-repeat center bottom 6px;
        background-size: 96px 96px;
      `}
  }

  p {
    font-size: 24px;
    font-weight: normal;
    line-height: normal;
    word-break: normal;
  }
`;

const ContentLayout = styled.section`
  display: block;
  box-sizing: border-box;
  margin-top: 35px;
  padding-bottom: 35px;
  border-bottom: 2px solid ${props => props.theme.colors.black};
  background: #ffffff;
  font-size: 24px;
  font-weight: normal;
  line-height: normal;
  color: ${props => props.theme.colors.black100};
  text-align: left;
  word-break: break-all;

  &:last-child {
    padding-bottom: 0;
    border-bottom: 0;
  }

  > h3 {
    text-align: center;
    font-size: 24px;
    font-weight: 600;
    line-height: normal;
    color: ${props => props.theme.colors.primary};
  }
`;

const ContentBox = styled.article`
  padding: 0 0 30px;
  background: #ffffff;
`;

export {
  PaddingBox,
  ResultLayout,
  DataLayout,
  ChildLayout,
  ContentLayout,
  ContentBox,
};

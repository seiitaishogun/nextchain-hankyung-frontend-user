import styled, { css } from 'styled-components';

const PaddingBox = styled.div`
  padding: 0 16px;
`;

const ResultLayout = styled.section`
  border-top: 1px solid #e3e3e3;
`;

const DataLayout = styled.div`
  margin-top: 8px;

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
  margin-top: 26px;

  &:first-child {
    margin-top: 0;
  }

  > h4 {
    font-size: 16px;
    font-weight: bold;
    line-height: 19px;
    color: ${props => props.theme.colors.black100};

    ${props =>
      props.sign &&
      css`
        padding-bottom: 108px;
        background: url('${props.theme
            .imageUrl}/content/icon/${props.sign}.webp')
          no-repeat center bottom 6px;
        background-size: 96px 96px;
      `}
  }

  p {
    font-size: 16px;
    font-weight: normal;
    line-height: normal;
    word-break: normal;
  }
`;

const ContentLayout = styled.section`
  display: block;
  box-sizing: border-box;
  margin-top: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid ${props => props.theme.colors.gray100};
  background: #ffffff;
  font-size: 16px;
  font-weight: normal;
  line-height: 19px;
  color: ${props => props.theme.colors.black100};
  text-align: center;
  word-break: break-all;

  &:last-child {
    padding-bottom: 0;
    border-bottom: 0;
  }

  > h3 {
    font-size: 20px;
    font-weight: 600;
    line-height: 21px;
    color: #000000;
  }
`;

const ContentBox = styled.article`
  padding: 0 0 10px;
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

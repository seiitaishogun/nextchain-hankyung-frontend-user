import styled from 'styled-components';

const ContentPreviewLayout = styled.section`
  margin-top: 20px;

  ul {
    margin-top: 25px;
  }
`;

const ContentPreviewListItem = styled.li<{ sign?: string | null }>`
  border-bottom: 1px solid ${props => props.theme.colors.gray100};
  padding: 14px 0;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${props => props.theme.colors.black100};

  &:first-child {
    padding-top: 0;
  }
`;

export { ContentPreviewLayout, ContentPreviewListItem };

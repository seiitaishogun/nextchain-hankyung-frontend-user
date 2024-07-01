import styled from 'styled-components';

const ContentPreviewLayout = styled.section`
  margin-top: 20px;
  padding: 0 14px;

  .title {
    padding-top: 16px;
    border-top: 2px solid ${props => props.theme.colors.black};
  }
`;

const ContentPreviewListItem = styled.li<{ sign?: string | null }>`
  border-top: 1px solid ${props => props.theme.colors.gray100};
  padding: 10px 0;
  font-size: 16px;
  font-weight: normal;
  line-height: 22px;
  color: ${props => props.theme.colors.black100};
`;

export { ContentPreviewLayout, ContentPreviewListItem };

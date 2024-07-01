import styled from 'styled-components';

const TodayContentInfoLayout = styled.div`
  margin-top: 18px;
  text-align: center;
`;

const TodayContentSummary = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  color: ${props => props.theme.colors.primary};
`;

const TodayContentName = styled.div`
  margin-top: 6px;
  font-size: 24px;
  font-weight: bold;
  color: ${props => props.theme.colors.black100};
  line-height: 29px;
`;

export { TodayContentInfoLayout, TodayContentSummary, TodayContentName };

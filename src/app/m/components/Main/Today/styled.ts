import styled from 'styled-components';

const TodayContentInfoLayout = styled.div`
  margin-top: 27px;
  text-align: center;
`;

const TodayContentSummary = styled.div`
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: ${props => props.theme.colors.primary};
`;

const TodayContentName = styled.div`
  margin-top: 8px;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: ${props => props.theme.colors.black100};
`;

export { TodayContentInfoLayout, TodayContentSummary, TodayContentName };

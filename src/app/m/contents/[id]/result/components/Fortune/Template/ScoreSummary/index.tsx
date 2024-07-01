import styled from 'styled-components';

interface Props {
  summary: string;
  contents: string;
}

const Layout = styled.div`
  h5 {
    margin-top: 12px;
    font-size: 40px;
    font-weight: 800;
    color: ${props => props.theme.colors.primary};
    line-height: normal;
  }

  p {
    margin-top: 8px;
    font-size: 16px;
    font-weight: 500;
    color: ${props => props.theme.colors.placeholder};
  }
`;

function ScoreSummary({ summary, contents }: Props) {
  return (
    <Layout>
      <h5 dangerouslySetInnerHTML={{ __html: `${summary}점` }} />
      <p dangerouslySetInnerHTML={{ __html: contents }} />
    </Layout>
  );
}

export default ScoreSummary;

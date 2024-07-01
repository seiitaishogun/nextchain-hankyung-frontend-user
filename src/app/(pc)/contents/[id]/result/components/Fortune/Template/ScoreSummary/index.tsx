import styled from 'styled-components';

interface Props {
  summary: string;
  contents: string;
}

const Layout = styled.div`
  h5 {
    margin-top: 15px;
    font-size: 46px;
    font-weight: 800;
    color: ${props => props.theme.colors.primary};
    line-height: normal;
  }

  p {
    margin-top: 10px;
    font-size: 24px;
    font-weight: 400;
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

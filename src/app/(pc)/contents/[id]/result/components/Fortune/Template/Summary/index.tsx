import React from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  padding-bottom: 35px;
  text-align: center;

  h4 {
    overflow: hidden;
    position: relative;
    font-size: 20px;
    font-weight: bold;
    color: ${props => props.theme.colors.black100};
    line-height: normal;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  p {
    margin-top: 16px;
    font-size: 30px;
    font-weight: bold;
    color: ${props => props.theme.colors.black100};
    line-height: normal;
    word-break: keep-all;
  }
`;

interface Props {
  name: string;
  summary: string;
}

function Summary({ name, summary }: Props) {
  return (
    <Layout>
      <h4 dangerouslySetInnerHTML={{ __html: name }} />
      <p dangerouslySetInnerHTML={{ __html: summary }} />
    </Layout>
  );
}

export default Summary;

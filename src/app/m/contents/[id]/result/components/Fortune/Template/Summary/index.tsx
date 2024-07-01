import React from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  padding-bottom: 24px;

  h4 {
    overflow: hidden;
    position: relative;
    font-size: 16px;
    font-weight: bold;
    color: ${props => props.theme.colors.black100};
    line-height: 19px;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  p {
    margin-top: 10px;
    font-size: 24px;
    font-weight: bold;
    color: ${props => props.theme.colors.black100};
    line-height: 29px;
    text-align: center;
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

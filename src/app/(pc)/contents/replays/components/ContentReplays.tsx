'use client';

import React from 'react';
import styled from 'styled-components';
import ReplayForm from '@/app/(pc)/contents/replays/components/Form';
import TextTitle from '@/app/(pc)/components/Title/TextTitle';

const Layout = styled.div`
  width: ${props => props.theme.contentWidth};
  margin: 20px auto 0;
  border-top: 4px solid ${props => props.theme.colors.black};

  .title {
    margin-top: 2px;
    padding-top: 24px;
    padding-bottom: 20px;
    border-bottom: 1px solid ${props => props.theme.colors.black};
  }
`;

function ContentReplays() {
  return (
    <Layout>
      <TextTitle text="콘텐츠 다시보기" />
      <ReplayForm />
    </Layout>
  );
}

export default ContentReplays;

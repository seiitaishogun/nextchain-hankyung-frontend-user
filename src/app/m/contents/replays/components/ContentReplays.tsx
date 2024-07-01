'use client';

import React from 'react';
import styled from 'styled-components';
import ReplayForm from '@/app/m/contents/replays/components/Form';
import Title from '@/app/m/components/Title';

const Layout = styled.div`
  margin-top: 20px;
  padding: 0 14px;

  .title {
    padding-bottom: 16px;
    border-bottom: 2px solid ${props => props.theme.colors.black};
  }
`;

function ContentReplays() {
  return (
    <Layout>
      <Title text="콘텐츠 다시보기" />
      <ReplayForm />
    </Layout>
  );
}

export default ContentReplays;

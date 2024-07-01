import React from 'react';
import styled from 'styled-components';
import SajuInput from '@/app/(pc)/contents/[id]/components/Form/Saju/Input';
import TextTitle from '@/app/(pc)/components/Title/TextTitle';

interface Props {
  isUser: boolean;
  text: string;
}

const Layout = styled.section`
  margin-top: 20px;

  .title {
    padding-bottom: 22px;
  }

  &:first-child {
    margin-top: 0;
  }
`;

function SajuForm({ isUser, text }: Props) {
  return (
    <Layout>
      <TextTitle text={text} />
      <SajuInput isUser={isUser} />
    </Layout>
  );
}

export default SajuForm;

import React from 'react';
import styled from 'styled-components';
import TarotInput from '@/app/(pc)/contents/[id]/components/Form/Tarot/Input';
import TextTitle from '@/app/(pc)/components/Title/TextTitle';

interface Props {
  isUser: boolean;
  text?: string;
}

const Layout = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 2px solid ${props => props.theme.colors.black};

  .active {
    margin: 32px 0 0;
  }
`;

function TarotForm({ isUser, text }: Props) {
  return (
    <Layout>
      {text && <TextTitle text={text} />}
      <TarotInput isUser={isUser} />
    </Layout>
  );
}

export default TarotForm;

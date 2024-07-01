import React from 'react';
import styled from 'styled-components';
import TarotInput from '@/app/m/contents/[id]/components/Form/Tarot/Input';
import Title from '@/app/m/components/Title';

interface Props {
  isUser: boolean;
  text?: string;
}

const Layout = styled.section`
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
      {text && <Title text={text} />}
      <TarotInput isUser={isUser} />
    </Layout>
  );
}

export default TarotForm;

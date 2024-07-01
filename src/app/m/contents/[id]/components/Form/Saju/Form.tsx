import React from 'react';
import styled from 'styled-components';
import SajuInput from '@/app/m/contents/[id]/components/Form/Saju/Input';
import Title from '@/app/m/components/Title';

interface Props {
  isUser: boolean;
  text: string;
}

const Layout = styled.section`
  margin-top: 20px;
  padding-top: 16px;
  border-top: 2px solid ${props => props.theme.colors.black};

  &:first-child {
    margin-top: 6px;
  }

  .title {
    padding-bottom: 16px;
  }
`;

function SajuForm({ isUser, text }: Props) {
  return (
    <Layout>
      <Title text={text} />
      <SajuInput isUser={isUser} />
    </Layout>
  );
}

export default SajuForm;

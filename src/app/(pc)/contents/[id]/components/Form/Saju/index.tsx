import React from 'react';
import styled from 'styled-components';
import SajuForm from '@/app/(pc)/contents/[id]/components/Form/Saju/Form';

interface Props {
  isPartner: boolean;
}

const Layout = styled.div`
  margin-top: 35px;
`;

function SajuFormContainer({ isPartner }: Props) {
  return (
    <Layout>
      <SajuForm isUser text="사주 정보 입력" />

      {isPartner && <SajuForm isUser={false} text="상대방 사주 정보 입력" />}
    </Layout>
  );
}

export default SajuFormContainer;

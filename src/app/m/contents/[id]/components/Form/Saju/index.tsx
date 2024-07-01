import React from 'react';
import SajuForm from '@/app/m/contents/[id]/components/Form/Saju/Form';
import { PaddingBox } from '../../../../../styles/layout';

interface Props {
  isPartner: boolean;
}

function SajuFormContainer({ isPartner }: Props) {
  return (
    <PaddingBox>
      <SajuForm isUser text="사주 정보 입력" />

      {isPartner && <SajuForm isUser={false} text="상대방 사주 정보 입력" />}
    </PaddingBox>
  );
}

export default SajuFormContainer;

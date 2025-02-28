import React from 'react';
import { PaddingBox } from '@/app/m/contents/[id]/result/components/Result.styled';
import Fortune from '@/app/m/contents/[id]/result/components/Fortune';
import { SajuResultProps } from '@/app/m/contents/[id]/result/components/Saju/types';
import ContentHeader from '@/app/m/contents/[id]/result/components/Saju/Header';
import TitleNavigation from '@/app/m/contents/[id]/result/components/TitleNavigation';

function SajuResult({ content, purchase, parents, saju }: SajuResultProps) {
  const isNavigation = content.category?.id === 1;

  return (
    <PaddingBox>
      <ContentHeader content={content} purchase={purchase} saju={saju} />

      {isNavigation && <TitleNavigation parents={parents} />}

      <Fortune parents={parents} isName />
    </PaddingBox>
  );
}

export default SajuResult;

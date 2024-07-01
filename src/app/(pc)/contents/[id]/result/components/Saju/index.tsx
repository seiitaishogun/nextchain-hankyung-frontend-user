import React from 'react';
import Fortune from '@/app/(pc)/contents/[id]/result/components/Fortune';
import { SajuResultProps } from '@/app/(pc)/contents/[id]/result/components/Saju/types';
import ContentHeader from '@/app/(pc)/contents/[id]/result/components/Saju/Header';
import TitleNavigation from '@/app/(pc)/contents/[id]/result/components/TitleNavigation';

function SajuResult({
  content,
  purchase,
  parents,
  childrenSaju,
  saju,
}: SajuResultProps) {
  const isNavigation = content.category?.id === 1;

  return (
    <div>
      <ContentHeader content={content} purchase={purchase} saju={saju} />

      {isNavigation && (
        <TitleNavigation
          contentId={content.id}
          parents={parents}
          childrenSaju={childrenSaju}
        />
      )}

      <Fortune parents={parents} isName />
    </div>
  );
}

export default SajuResult;

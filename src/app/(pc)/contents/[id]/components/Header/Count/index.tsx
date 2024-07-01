import React from 'react';
import Image from 'next/image';
import { numberWithCommas } from '@module/utils/number';
import {
  ContentCount as Layout,
  ContentCountItem,
} from '@/app/(pc)/contents/[id]/components/Header/styled';
import { ContentCountProps } from '@/app/(pc)/contents/[id]/components/Header/types';

function ContentCount({
  view_count,
  like_count,
  share_count,
  isPay,
}: ContentCountProps) {
  return (
    <Layout>
      <ContentCountItem
        image={`${process.env.APP_IMAGE_URL}/pc/common/view_gray_icon.svg`}
      >
        <span>{numberWithCommas(view_count)}</span>
      </ContentCountItem>
      <ContentCountItem
        image={`${process.env.APP_IMAGE_URL}/pc/common/like_gray_icon.svg`}
      >
        <span>{numberWithCommas(like_count)}</span>
      </ContentCountItem>
      <ContentCountItem
        image={`${process.env.APP_IMAGE_URL}/pc/common/share_gray_icon.svg`}
      >
        <span>{numberWithCommas(share_count)}</span>
      </ContentCountItem>

      {isPay && (
        <Image
          src={`${process.env.APP_IMAGE_URL}/pc/common/won_icon.webp`}
          width={22}
          height={22}
          alt="유로 콘텐츠"
        />
      )}
    </Layout>
  );
}

export default ContentCount;

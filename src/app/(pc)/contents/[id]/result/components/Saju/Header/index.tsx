import React from 'react';
import Image from 'next/image';
import { PurchaseT, SajuT } from '@module/types/content/result';
import { ContentDetailT } from '@module/types/content/detail';
import { DEFAULT_THUMBNAIL_LARGE_PATH } from '@/app/(pc)/constants/image';
import ContentCategory from '@/app/(pc)/contents/[id]/components/Header/Category';
import ContentUserInfo from '@/app/(pc)/contents/[id]/result/components/Saju/Header/User';
import {
  ContentResultHeaderLayout as Layout,
  ContentBanner,
  ContentName,
} from '@/app/(pc)/contents/[id]/result/components/Saju/Header/styled';

interface Props {
  content: ContentDetailT;
  purchase: PurchaseT;
  saju: SajuT[];
}

function ContentHeader({ content, purchase, saju }: Props) {
  return (
    <Layout>
      <ContentCategory
        type={content.type.description}
        category={content.category?.name}
        isUnderline
      />
      <ContentUserInfo purchase={purchase} saju={saju} />
      <ContentName>{content.name}</ContentName>
      <ContentBanner>
        <Image
          src={content.banner || DEFAULT_THUMBNAIL_LARGE_PATH}
          alt=""
          fill
        />
      </ContentBanner>
    </Layout>
  );
}

export default ContentHeader;

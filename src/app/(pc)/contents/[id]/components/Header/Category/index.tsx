import React from 'react';
import { ContentCategory as Layout } from '@/app/(pc)/contents/[id]/components/Header/styled';
import { ContentCategoryProps } from '@/app/(pc)/contents/[id]/components/Header/types';

function ContentCategory({
  type,
  category,
  isUnderline,
}: ContentCategoryProps) {
  const categoryText = [type, category].filter(c => !!c).join(' > ');
  return <Layout $isUnderline={isUnderline}>{categoryText}</Layout>;
}

export default ContentCategory;

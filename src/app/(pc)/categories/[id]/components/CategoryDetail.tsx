'use client';

import React, { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import styled from 'styled-components';
import { useInfiniteQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import { fetchCategoryList } from '@module/api/category';
import useCategories from '@module/hooks/common/useCategories';
import { getContentURL } from '@module/utils/url';
import TextTitle from '@/app/(pc)/components/Title/TextTitle';
import List from '@/app/(pc)/categories/components/List';
import {
  ListLargeName,
  ListThumbnail,
} from '@/app/(pc)/components/List/styled';

const Layout = styled.section<{ $isBorder: boolean }>`
  width: ${props => props.theme.desktopDeviceWidth};
  margin: 20px auto 0;

  ${props =>
    props.$isBorder &&
    `
    border-top: 4px solid ${props.theme.colors.black};
  `}
  .title {
    margin-top: 2px;
    border-top: 1px solid ${props => props.theme.colors.black};
  }
`;

const TopBox = styled.div`
  margin-top: 24px;
  padding-bottom: 22px;
  border-bottom: 4px solid ${props => props.theme.colors.black};

  ${ListLargeName} {
    padding-top: 20px;
  }
`;

function CategoryDetail() {
  const router = useRouter();
  const searchParams = useParams();
  const id = Number(searchParams.id || 0);
  const categoryData = useCategories() || [];
  const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery(
      ['categoryList', id],
      ({ pageParam = 1 }) =>
        fetchCategoryList({
          id,
          page: pageParam,
        }),
      {
        getNextPageParam: (lastPage, allPages) => {
          const nextPage = allPages.length + 1;
          return lastPage.data.last_page < nextPage ? undefined : nextPage;
        },
        select: res => ({
          pages: res?.pages.flatMap(p => p.data.list),
          pageParams: res.pageParams,
        }),
        onError: () => {
          router.replace('/error');
        },
      }
    );

  useEffect(() => {
    if (!id) router.push('/error');
  }, [id]);

  const getCategoryAssets = (
    categoryId: number
  ): { id: number; name: string; thumbnail: string } | null => {
    switch (categoryId) {
      /*
      case 4:
        return {
          id: 7,
          name: `사주로 한눈에 보는<br/>나의 평생 재물운은?`,
          thumbnail: `${process.env.APP_IMAGE_URL}/pc/category/thumbnail_4.webp`,
        };
       */
      default:
        return null;
    }
  };

  const title = categoryData.find(item => item.id === id)?.name || '';

  const assets = getCategoryAssets(id);
  const contentPath = getContentURL(assets?.id || 0);

  return (
    <Layout $isBorder={!assets}>
      {assets && (
        <TopBox>
          <ListThumbnail>
            <Link href={contentPath} prefetch={false}>
              <Image src={assets.thumbnail} width={726} height={336} alt="" />
            </Link>
          </ListThumbnail>

          <ListLargeName>
            <Link
              href={contentPath}
              prefetch={false}
              dangerouslySetInnerHTML={{ __html: assets.name }}
            />
          </ListLargeName>
        </TopBox>
      )}

      <TextTitle text={title} />
      <List
        data={data}
        isLoading={isLoading || isFetchingNextPage}
        hasNextPage={hasNextPage}
        fetchNextPage={fetchNextPage}
      />
    </Layout>
  );
}

export default CategoryDetail;

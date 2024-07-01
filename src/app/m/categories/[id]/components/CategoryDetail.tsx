'use client';

import React, { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import styled from 'styled-components';
import { useInfiniteQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import { fetchCategoryList } from '@module/api/category';
import useCategories from '@module/hooks/common/useCategories';
import { getMobileContentURL } from '@module/utils/url';
import Title from '@/app/m/components/Title';
import List from '@/app/m/categories/components/List';
import { ListLargeName, ListThumbnail } from '@/app/m/components/List/styled';

const Layout = styled.section`
  padding: 0 14px;

  .title {
    padding: 14px 0;
    border-top: 2px solid ${props => props.theme.colors.black};
  }
`;

const TopBox = styled.div`
  padding-bottom: 15px;

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
          router.replace('/m/error');
        },
      }
    );

  useEffect(() => {
    if (!id) router.push('/m/error');
  }, [id]);

  const getCategoryAssets = (categoryId: number) => {
    switch (categoryId) {
      case 4:
        return {
          id: 7,
          name: `사주로 한눈에 보는<br/>나의 평생 재물운은?`,
          thumbnail: `${process.env.APP_IMAGE_URL}/m/category/thumbnail_4.webp`,
        };
      case 6:
        return {
          id: 17,
          name: `부부 갈등에서 탈출하는 방법은?`,
          thumbnail: `${process.env.APP_IMAGE_URL}/m/category/thumbnail_6.webp`,
        };
      case 7:
        return {
          id: 9,
          name: `올해 내가 조심해야 할 질병은?`,
          thumbnail: `${process.env.APP_IMAGE_URL}/m/category/thumbnail_7.webp`,
        };
      case 8:
        return {
          id: 19,
          name: `단점을 극복하고<br/>더 좋은 사람이 되는 방법은?`,
          thumbnail: `${process.env.APP_IMAGE_URL}/m/category/thumbnail_8.webp`,
        };
      case 9:
        return {
          id: 20,
          name: `스트레스를 한 방에 날리는<br/>나에게 맞는 취미는?`,
          thumbnail: `${process.env.APP_IMAGE_URL}/m/category/thumbnail_9.webp`,
        };
      default:
        return null;
    }
  };

  const title = categoryData.find(item => item.id === id)?.name || '';

  const assets = getCategoryAssets(id);
  const contentPath = getMobileContentURL(assets?.id || 0);

  return (
    <Layout>
      {assets && (
        <TopBox>
          <ListThumbnail>
            <Link href={contentPath} prefetch={false}>
              <Image src={assets.thumbnail} alt="" fill />
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

      <Title text={title} />
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

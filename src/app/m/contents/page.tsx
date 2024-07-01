'use client';

import React from 'react';
import styled from 'styled-components';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { fetchContentAll } from '@module/api/content/list';
import Title from '@/app/m/components/Title';
import List from '@/app/m/categories/components/List';

const Layout = styled.section`
  padding: 0 14px;

  .title {
    padding: 14px 0;
    border-top: 2px solid ${props => props.theme.colors.black};
  }
`;

function ContentList() {
  const router = useRouter();
  const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery(
      ['contentList'],
      ({ pageParam = 1 }) =>
        fetchContentAll({
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

  return (
    <Layout>
      <Title text="운세 전체보기" />

      <List
        data={data}
        isLoading={isLoading || isFetchingNextPage}
        hasNextPage={hasNextPage}
        fetchNextPage={fetchNextPage}
      />
    </Layout>
  );
}

export default ContentList;

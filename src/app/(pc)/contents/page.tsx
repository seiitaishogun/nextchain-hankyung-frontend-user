'use client';

import React from 'react';
import styled from 'styled-components';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { fetchContentAll } from '@module/api/content/list';
import List from '@/app/(pc)/categories/components/List';
import TextTitle from '@/app/(pc)/components/Title/TextTitle';

const Layout = styled.section`
  width: ${props => props.theme.desktopDeviceWidth};
  margin: 20px auto 0;
  border-top: 4px solid ${props => props.theme.colors.black};

  .title {
    margin-top: 2px;
    padding-top: 24px;
    padding-bottom: 20px;
    border-bottom: 1px solid ${props => props.theme.colors.black};
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
          router.replace('/error');
        },
      }
    );

  return (
    <Layout>
      <TextTitle text="운세 전체보기" />

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

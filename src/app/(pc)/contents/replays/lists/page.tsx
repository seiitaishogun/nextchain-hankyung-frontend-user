'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { getCookie } from 'cookies-next';
import React from 'react';
import { useRouter } from 'next/navigation';
import { fetchContentReplayList } from '@module/api/content/replay';
import { USER_PURCHASE_HASH_KEY } from '@module/constants/user/hash';
import useAlert from '@module/hooks/common/useAlert';
import TextTitle from '@/app/(pc)/components/Title/TextTitle';
import List from '@/app/(pc)/contents/replays/components/List';

const Layout = styled.div`
  width: ${props => props.theme.contentWidth};
  margin: 20px auto 0;
  border-top: 4px solid ${props => props.theme.colors.black};

  .title {
    margin-top: 2px;
    padding-top: 24px;
    padding-bottom: 20px;
    border-bottom: 1px solid ${props => props.theme.colors.black};
  }
`;

function ContentReplayList() {
  const router = useRouter();
  const { renderMessage } = useAlert();

  const purchaseHash = (getCookie(USER_PURCHASE_HASH_KEY) || '').toString();

  const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery(
      ['contentReplayList'],
      ({ pageParam = 1 }) =>
        fetchContentReplayList({
          page: pageParam,
          purchase_hash: purchaseHash,
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
    <>
      <Layout>
        <TextTitle text="콘텐츠 다시보기" />
        <List
          data={data}
          isLoading={isLoading || isFetchingNextPage}
          hasNextPage={hasNextPage}
          fetchNextPage={fetchNextPage}
        />
      </Layout>
      {renderMessage()}
    </>
  );
}

export default ContentReplayList;

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { fetchContentPreview } from '@module/api/content';
import TextTitle from '@/app/(pc)/components/Title/TextTitle';
import {
  ContentPreviewLayout as Layout,
  ContentPreviewListItem,
} from '@/app/(pc)/contents/[id]/components/Preview/styled';

function ContentPreview() {
  const params = useParams();
  const id = Number(params.id || 0);
  const { data } = useQuery(
    ['contentPreview', id],
    () => fetchContentPreview(id),
    {
      initialData: {
        data: [],
      },
      select: res => res.data.filter((r: any) => r.name !== 'null'),
    }
  );

  return (
    <Layout>
      <TextTitle text="이런 내용이 있어요" />
      <ul>
        {data.map(({ id: cId, name, sign }: any) => (
          <ContentPreviewListItem key={cId} sign={sign}>
            <h4 dangerouslySetInnerHTML={{ __html: name }} />
          </ContentPreviewListItem>
        ))}
      </ul>
    </Layout>
  );
}

export default ContentPreview;

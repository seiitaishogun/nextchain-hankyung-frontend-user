import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { getMobileContentURL } from '@module/utils/url';
import { DEFAULT_THUMBNAIL_PATH } from '@/app/m/constants/image';
import { ListName, ListSummary } from '@/app/m/components/List/styled';
import { SwipeListLargeThumbnail } from '@/app/m/components/SwipeList/styled';
import { MainDetailProps } from '@/app/m/components/Main/types';

const Layout = styled.div`
  display: flex;
  flex-direction: column;

  ${ListSummary} {
    margin-top: 10px;
  }
`;

function Large({ data }: MainDetailProps) {
  const contentPath = getMobileContentURL(data.id);

  return (
    <Layout>
      <ListName>
        <Link href={contentPath} prefetch={false}>
          {data.name}
        </Link>
      </ListName>

      <SwipeListLargeThumbnail>
        <Link href={contentPath} prefetch={false}>
          <Image
            src={data.thumbnail || DEFAULT_THUMBNAIL_PATH}
            alt=""
            width={271}
            height={154}
          />
        </Link>
      </SwipeListLargeThumbnail>

      <ListSummary>
        <Link href={contentPath} prefetch={false}>
          {data.summary}
        </Link>
      </ListSummary>
    </Layout>
  );
}

export default Large;

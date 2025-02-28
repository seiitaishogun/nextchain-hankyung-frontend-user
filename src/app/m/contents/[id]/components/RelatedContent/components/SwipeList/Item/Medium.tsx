import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { getMobileContentURL } from '@module/utils/url';
import { ContentRelatedList } from '@module/types/content/detail';
import { DEFAULT_THUMBNAIL_PATH } from '@/app/m/constants/image';
import { ListDescription } from '@/app/m/components/List/styled';
import { SwipeListLargeThumbnail } from '@/app/m/components/SwipeList/styled';

const Layout = styled.div`
  display: flex;
  flex-direction: column;

  ${SwipeListLargeThumbnail} {
    margin-top: 0;
  }

  ${ListDescription} {
    width: 100%;
    padding-left: 0;
  }
`;

interface MediumProps {
  data: ContentRelatedList;
}

function Medium({ data }: MediumProps) {
  const contentPath = getMobileContentURL(data.id);

  return (
    <Layout>
      <SwipeListLargeThumbnail>
        <Link href={contentPath} prefetch={false}>
          <Image
            src={data.thumbnail || DEFAULT_THUMBNAIL_PATH}
            alt=""
            width={195}
            height={113}
          />
        </Link>
      </SwipeListLargeThumbnail>

      <ListDescription>
        <Link href={contentPath} prefetch={false}>
          {data.summary}
        </Link>
      </ListDescription>
    </Layout>
  );
}

export default Medium;

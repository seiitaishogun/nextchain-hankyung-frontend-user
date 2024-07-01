import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';
import { getContentURL } from '@module/utils/url';
import { DEFAULT_THUMBNAIL_PATH } from '@/app/(pc)/constants/image';
import {
  ListDescription,
  ListName,
  ListSmallThumbnail,
} from '@/app/(pc)/components/List/styled';
import { MainDetailProps } from '@/app/(pc)/components/Main/types';

const Layout = styled.div`
  padding: 16px 0;
  border-top: 1px solid ${props => props.theme.colors.gray100};

  &:first-child {
    border-top: 0;
  }
`;

const ListDetailBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;

  ${ListDescription} {
    margin-top: 0;
  }
`;

function Medium({ data }: MainDetailProps) {
  const contentPath = getContentURL(data.id);

  return (
    <Layout>
      <ListName>
        <Link
          href={contentPath}
          dangerouslySetInnerHTML={{ __html: data.name }}
          prefetch={false}
        />
      </ListName>

      <ListDetailBox>
        <ListDescription>
          <Link
            href={contentPath}
            dangerouslySetInnerHTML={{ __html: data.summary }}
            prefetch={false}
          />
        </ListDescription>

        <ListSmallThumbnail>
          <Link href={contentPath} prefetch={false}>
            <Image
              src={data.thumbnail || DEFAULT_THUMBNAIL_PATH}
              alt=""
              width={77}
              height={48}
            />
          </Link>
        </ListSmallThumbnail>
      </ListDetailBox>
    </Layout>
  );
}

export default Medium;

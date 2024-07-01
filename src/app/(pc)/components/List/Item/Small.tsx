import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';
import { getContentURL } from '@module/utils/url';
import { DEFAULT_THUMBNAIL_PATH } from '@/app/(pc)/constants/image';
import {
  ListDescription,
  ListName,
  ListSmallThumbnail,
  ListSummary,
} from '@/app/(pc)/components/List/styled';
import { ListItemSmallProps } from '@/app/(pc)/components/List/types';

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-top: 1px solid ${props => props.theme.colors.gray100};

  &:first-child {
    border-top: 0;
  }
`;

const ListCount = styled.div`
  width: 15px;
  padding-left: 15px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;

  @media (max-width: 320px) {
    padding-left: 8px;
  }
`;

const ListDetailBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 192px;

  @media (max-width: 320px) {
    width: 140px;
  }

  ${ListDescription} {
    margin-top: 0;
  }
`;

function Small({ data, order }: ListItemSmallProps) {
  const contentPath = getContentURL(data.id);

  return (
    <Layout>
      <ListCount>{order}</ListCount>

      <ListDetailBox>
        <ListName>
          <Link
            href={contentPath}
            dangerouslySetInnerHTML={{ __html: data.name }}
            prefetch={false}
          />
        </ListName>
        <ListSummary>
          <Link
            href={contentPath}
            dangerouslySetInnerHTML={{ __html: data.summary }}
            prefetch={false}
          />
        </ListSummary>
      </ListDetailBox>

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
    </Layout>
  );
}

export default Small;

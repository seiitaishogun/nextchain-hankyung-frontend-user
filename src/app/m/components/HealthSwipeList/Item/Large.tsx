import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { getMobileContentURL } from '@module/utils/url';
import { ListName, ListSummary } from '../../List/styled';
import { SwipeListLargeThumbnail } from '../styled';
import { DEFAULT_THUMBNAIL_PATH } from '@/app/m/constants/image';
import { ListItemProps } from '../types';

const Layout = styled.div`
  display: flex;
  flex-direction: column;

  ${ListSummary} {
    margin-top: 10px;
  }
`;

const ItemName = styled(ListName)`
  margin-top: 10px;
  a {
    text-overflow: ellipsis;
    white-space: wrap;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;
const ItemCategory = styled(ListName)``;

function Large({ data }: ListItemProps) {
  const contentPath = getMobileContentURL(data.id);

  return (
    <Layout>
      <ItemCategory>
        <Link href={contentPath} prefetch={false}>
          {data.category} / {data.type_description}
        </Link>
      </ItemCategory>

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
      <ItemName>
        <Link href={contentPath} prefetch={false}>
          {data.name}
        </Link>
      </ItemName>
    </Layout>
  );
}

export default Large;

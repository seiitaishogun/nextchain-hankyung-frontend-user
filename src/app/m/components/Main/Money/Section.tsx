import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';
import { getMobileContentURL } from '@module/utils/url';
import { DEFAULT_THUMBNAIL_PATH } from '@/app/m/constants/image';
import {
  ListLargeName,
  ListLargeThumbnail,
  ListSummary,
} from '@/app/m/components/List/styled';
import { MainDetailProps } from '@/app/m/components/Main/types';

const Layout = styled.div`
  padding-bottom: 15px;
  border-bottom: 1px solid ${props => props.theme.colors.gray100};
`;

function MoneySection({ data }: MainDetailProps) {
  const contentPath = getMobileContentURL(data.id);

  return (
    <Layout>
      <ListLargeThumbnail>
        <Link href={contentPath} prefetch={false}>
          <Image src={data.thumbnail || DEFAULT_THUMBNAIL_PATH} alt="" fill />
        </Link>
      </ListLargeThumbnail>

      <ListLargeName>
        <Link href={contentPath} prefetch={false}>
          {data.name}
        </Link>
      </ListLargeName>

      <ListSummary>
        <Link href={contentPath} prefetch={false}>
          {data.summary}
        </Link>
      </ListSummary>
    </Layout>
  );
}

export default MoneySection;

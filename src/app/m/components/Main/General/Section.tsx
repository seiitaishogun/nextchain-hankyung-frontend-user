import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';
import { getMobileContentURL } from '@module/utils/url';
import { DEFAULT_THUMBNAIL_PATH } from '@/app/m/constants/image';
import { ListLargeName, ListThumbnail } from '@/app/m/components/List/styled';
import Title from '@/app/m/components/Title';
import { MainDetailProps } from '@/app/m/components/Main/types';

const Layout = styled.div`
  padding-bottom: 16px;
  border-bottom: 1px solid ${props => props.theme.colors.gray100};
`;

function GeneralSection({ data }: MainDetailProps) {
  const contentPath = getMobileContentURL(data.id);

  return (
    <Layout>
      <Title
        text="누구보다 완벽한 3월을 위해"
        linkOptions={{
          href: '/categories/2',
        }}
      />

      <ListThumbnail>
        <Link href={contentPath} prefetch={false}>
          <Image src={data.thumbnail || DEFAULT_THUMBNAIL_PATH} alt="" fill />
        </Link>
      </ListThumbnail>

      <ListLargeName $isNew={data.is_new}>
        <Link href={contentPath} prefetch={false}>
          <span>{data.name}</span>
        </Link>
      </ListLargeName>
    </Layout>
  );
}

export default GeneralSection;

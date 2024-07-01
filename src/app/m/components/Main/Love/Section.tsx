import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';
import { getMobileContentURL } from '@module/utils/url';
import { DEFAULT_THUMBNAIL_PATH } from '@/app/m/constants/image';
import { ListLargeName, ListThumbnail } from '@/app/m/components/List/styled';
import Title from '@/app/m/components/Title';
import { MainDetailProps } from '@/app/m/components/Main/types';

const Layout = styled.div`
  margin-bottom: 16px;

  ${ListLargeName} {
    margin-top: 16px;
    padding-top: 16px;
    border-top: 2px solid ${props => props.theme.colors.black};
  }
`;

function LoveSection({ data }: MainDetailProps) {
  const contentPath = getMobileContentURL(data.id);

  return (
    <Layout>
      <Title
        text="재물운 특집"
        linkOptions={{
          href: '/m/categories/4',
        }}
      />

      <ListThumbnail>
        <Link href={contentPath} prefetch={false}>
          <Image src={data.thumbnail || DEFAULT_THUMBNAIL_PATH} alt="" fill />
        </Link>
      </ListThumbnail>

      <ListLargeName>
        <Link href="/m/contents/14" prefetch={false}>
          {data.name}
        </Link>
      </ListLargeName>
    </Layout>
  );
}

export default LoveSection;

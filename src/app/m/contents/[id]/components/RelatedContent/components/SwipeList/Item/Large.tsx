import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { getMobileContentURL } from '@module/utils/url';
import { ContentRelatedList } from '@module/types/content/detail';
import { ListName, ListSummary } from '@/app/(pc)/components/List/styled';
import { SwipeListLargeThumbnail } from '../styled';
import { DEFAULT_THUMBNAIL_PATH } from '@/app/(pc)/constants/image';

const Layout = styled.div`
  display: flex;
  flex-direction: column;

  ${ListSummary} {
    margin-top: 10px;
  }
`;

const ContentImage = styled.div`
  position: relative;
  height: 164px;
`;

const ContentNote = styled.div`
  position: absolute;
  border-radius: 4px;
  background-color: #ff3535;
  font-size: 12px;
  color: #ffffff;
  padding: 5px 10px;
`;

const ContentDiscount = styled(ContentNote)`
  bottom: 10px;
  left: 15px;
`;

const ContentCategory = styled(ContentNote)`
  top: 11px;
  right: 10px;
  background-color: #142c67;
`;

const ContentName = styled(ListName)`
  font-size: 16px;
  font-color: #121212;
  line-height: 22.3px;
  margin-top: 5px;
  a {
    text-overflow: ellipsis;
    white-space: wrap;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

interface LargeProps {
  data: ContentRelatedList;
  showCategoryName?: boolean;
}

function Large({ data, showCategoryName = true }: LargeProps) {
  const contentPath = getMobileContentURL(data.id);

  return (
    <Layout>
      <SwipeListLargeThumbnail>
        <ContentImage>
          <Link href={contentPath} prefetch={false}>
            <Image
              src={data.thumbnail || DEFAULT_THUMBNAIL_PATH}
              alt=""
              width={257}
              height={164}
            />
          </Link>
          {showCategoryName ? (
            <ContentCategory>{data.category}</ContentCategory>
          ) : null}
          {data.is_discount ? (
            <ContentDiscount>{data.discount_percent}% OFF</ContentDiscount>
          ) : null}
        </ContentImage>
      </SwipeListLargeThumbnail>

      <ContentName>
        <Link href={contentPath} prefetch={false}>
          {data.name}
        </Link>
      </ContentName>
    </Layout>
  );
}

export default Large;

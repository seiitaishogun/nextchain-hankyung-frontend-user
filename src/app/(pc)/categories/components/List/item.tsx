import Image from 'next/image';
import Link from 'next/link';
import { getContentURL } from '@module/utils/url';
import { DEFAULT_THUMBNAIL_PATH } from '@/app/(pc)/constants/image';
import {
  ListDescription,
  ListName,
  ListSmallSquareThumbnail,
  ListViewCount,
} from '@/app/(pc)/components/List/styled';
import { ListItemProps } from '@/app/(pc)/categories/components/List/types';
import {
  ListItemDetailBox,
  ListItemLayout as Layout,
} from '@/app/(pc)/categories/components/List/styled';

function ListItem({ data }: ListItemProps) {
  const contentPath = getContentURL(data.id);

  return (
    <Layout>
      <ListSmallSquareThumbnail>
        <Link href={contentPath} prefetch={false}>
          <Image
            src={data.thumbnail || DEFAULT_THUMBNAIL_PATH}
            alt=""
            width={120}
            height={126}
          />
        </Link>
      </ListSmallSquareThumbnail>

      <ListItemDetailBox>
        <ListName>
          <Link href={contentPath} prefetch={false}>
            {data.name}
          </Link>
        </ListName>
        <ListDescription>
          <Link href={contentPath} prefetch={false}>
            {data.summary}
          </Link>
        </ListDescription>

        <ListViewCount>
          <Link href={contentPath} prefetch={false}>
            {data.view_count}
          </Link>
        </ListViewCount>
      </ListItemDetailBox>
    </Layout>
  );
}

export default ListItem;

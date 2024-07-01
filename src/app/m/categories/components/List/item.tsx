import Image from 'next/image';
import Link from 'next/link';
import { getMobileContentURL } from '@module/utils/url';
import { DEFAULT_THUMBNAIL_PATH } from '@/app/m/constants/image';
import {
  ListDescription,
  ListName,
  ListSmallSquareThumbnail,
  ListViewCount,
} from '@/app/m/components/List/styled';
import { ListItemProps } from '@/app/m/categories/components/List/types';
import {
  ListItemDetailBox,
  ListItemLayout as Layout,
} from '@/app/m/categories/components/List/styled';

function ListItem({ data }: ListItemProps) {
  const contentPath = getMobileContentURL(data.id);

  return (
    <Layout>
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

        <ListViewCount>{data.view_count}</ListViewCount>
      </ListItemDetailBox>

      <ListSmallSquareThumbnail>
        <Link href={contentPath} prefetch={false}>
          <Image
            src={data.thumbnail || DEFAULT_THUMBNAIL_PATH}
            alt=""
            width={78}
            height={78}
          />
        </Link>
      </ListSmallSquareThumbnail>
    </Layout>
  );
}

export default ListItem;

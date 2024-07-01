import Link from 'next/link';
import Image from 'next/image';
import { getMobileContentURL } from '@module/utils/url';
import { DEFAULT_THUMBNAIL_PATH } from '@/app/m/constants/image';
import { MainDetailProps } from '@/app/m/components/Main/types';

function TodaySwiperItem({ data }: MainDetailProps) {
  const contentPath = getMobileContentURL(data.id);

  return (
    <div className="swiper-item">
      <Link href={contentPath} prefetch={false}>
        <Image src={data.thumbnail || DEFAULT_THUMBNAIL_PATH} alt="" fill />
      </Link>
    </div>
  );
}

export default TodaySwiperItem;

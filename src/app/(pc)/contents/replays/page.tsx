import { Metadata } from 'next';
import { fetchCategories } from '@module/api/category';
import { SEO } from '../../constants/SEO';
import { DEFAULT_THUMBNAIL_PATH } from '../../constants/image';
import ContentReplays from './components/ContentReplays';

export async function generateMetadata(): Promise<Metadata> {
  const categories = await fetchCategories();
  const keywords = categories.data.map(c => c.name).join(', ');

  const description = '콘텐츠 다시보기';

  return {
    title: `${SEO.COMPANY_NAME} 운세 다시보기`,
    description,
    keywords,
    openGraph: {
      title: `${SEO.COMPANY_NAME} 운세 다시보기`,
      description,
      url: `${process.env.APP_URL}/contents/replays`,
      locale: 'ko',
      type: 'website',
      siteName: 'fortune hankyung',
      images: `${process.env.APP_IMAGE_URL + DEFAULT_THUMBNAIL_PATH}`,
    },
  };
}

export default async function ContentReplaysPage() {
  return <ContentReplays />;
}

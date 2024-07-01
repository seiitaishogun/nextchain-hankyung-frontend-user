import { Metadata } from 'next';
import { fetchCategories } from '@module/api/category';

import Home from './components/Home';
import { SEO } from '@/app/(pc)/constants/SEO';
import { MAIN_TOP_DATA } from './data/main';
import { DEFAULT_THUMBNAIL_PATH } from './constants/image';

export async function generateMetadata(): Promise<Metadata> {
  const categories = await fetchCategories();
  const keywords = categories.data.map(c => c.name).join(', ');

  return {
    title: `${SEO.COMPANY_NAME} 운세`,
    description: `${SEO.COMPANY_NAME}에서 제공하는 9개 카테고리의 다양한 주제의 운세풀이를 확인해보세요.`,
    keywords,
    openGraph: {
      title: `${SEO.COMPANY_NAME} 운세`,
      description: `${SEO.COMPANY_NAME}에서 제공하는 9개 카테고리의 다양한 주제의 운세풀이를 확인해보세요.`,
      url: process.env.APP_URL,
      locale: 'ko',
      type: 'website',
      siteName: 'fortune hankyung',
      images: `${process.env.APP_IMAGE_URL}${MAIN_TOP_DATA[0].thumbnail || DEFAULT_THUMBNAIL_PATH}`,
    },
  };
}

export default async function HomePage() {
  return <Home />;
}

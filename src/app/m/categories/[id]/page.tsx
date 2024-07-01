import { Metadata } from 'next';
import { fetchCategories, fetchCategoryList } from '@module/api/category';
import { SEO } from '@/app/(pc)/constants/SEO';
import CategoryDetail from './components/CategoryDetail';
import { DEFAULT_THUMBNAIL_PATH } from '../../constants/image';

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const categories = await fetchCategories();
  const list = await fetchCategoryList({
    id: +params.id,
    page: 1,
  });

  const currentCategory = categories.data.find(c => c.id === +params.id)?.name;
  const keywords = list.data.list.map(c => c.name).join(', ');

  return {
    title: `${SEO.COMPANY_NAME} 운세 ${currentCategory}`,
    description: `${SEO.COMPANY_NAME} 에서 제공하는 ${SEO.COMPANY_NAME} 확인해보세요.`,
    keywords,
    openGraph: {
      title: `${SEO.COMPANY_NAME} 운세 ${currentCategory}`,
      description: `${SEO.COMPANY_NAME} 에서 제공하는 ${SEO.COMPANY_NAME} 확인해보세요.`,
      url: `${process.env.APP_URL}/categories/${params.id}`,
      locale: 'ko',
      type: 'website',
      siteName: 'fortune hankyung category',
      images: `${list.data.list[0].thumbnail || process.env.APP_IMAGE_URL + DEFAULT_THUMBNAIL_PATH}`,
    },
  };
}

export default async function HomePage() {
  return <CategoryDetail />;
}

import { Metadata } from 'next';
import { fetchContentDetail, fetchContentPreview } from '@module/api/content';
import ContentDetail from './components/ContentDetail';
import { SEO } from '../../constants/SEO';
import { removeAllHTMLTag } from '../../utils/string.util';
import { DEFAULT_THUMBNAIL_PATH } from '../../constants/image';

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const content = await fetchContentDetail({
    id: +params.id,
  });
  const contentPreview = await fetchContentPreview(+params.id);
  const keywords = contentPreview.data
    .map((p: { name: string }) => removeAllHTMLTag(p.name))
    .join(', ');

  const description = removeAllHTMLTag(content.data.contents);

  return {
    title: `${SEO.COMPANY_NAME} 운세 ${content.data.name}`,
    description,
    keywords,
    openGraph: {
      title: `${SEO.COMPANY_NAME} 운세 ${content.data.name}`,
      description,
      url: `${process.env.APP_URL}/contents/${params.id}`,
      locale: 'ko',
      type: 'website',
      siteName: 'fortune hankyung contents',
      images: `${content.data.banner || process.env.APP_IMAGE_URL + DEFAULT_THUMBNAIL_PATH}`,
    },
  };
}

export default async function HomePage() {
  return <ContentDetail />;
}

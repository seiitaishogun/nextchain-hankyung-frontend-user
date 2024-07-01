import { Metadata } from 'next';
import { getCookie } from 'cookies-next';
import { fetchContentDetail, fetchContentResult } from '@module/api/content';
import { USER_PURCHASE_HASH_KEY } from '@module/constants/user/hash';
import ContentResult from './components/ContentResult';
import { removeAllHTMLTag } from '@/app/(pc)/utils/string.util';
import { SEO } from '@/app/(pc)/constants/SEO';
import { DEFAULT_THUMBNAIL_PATH } from '@/app/(pc)/constants/image';

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: { id: string; purchaseId: string };
  searchParams: { share_code?: string | undefined };
}): Promise<Metadata> {
  const content = await fetchContentDetail({
    id: +params.id,
  });

  const share_code = searchParams?.share_code;
  const purchase_hash =
    (getCookie(USER_PURCHASE_HASH_KEY) || '').toString() || undefined;
  const contentResult = await fetchContentResult({
    id: +params.purchaseId,
    share_code,
    purchase_hash,
  });

  const description =
    contentResult.data.children_data.find(d => (d.summary ?? '').length)
      ?.summary ?? '';
  const keywords = contentResult.data.children
    .filter((p: { name: string }) => p.name && p.name !== 'null')
    .map((p: { name: string }) => removeAllHTMLTag(p.name))
    .join(', ');

  return {
    title: `${SEO.COMPANY_NAME} 운세 ${content.data.name}`,
    description,
    keywords,
    openGraph: {
      title: `${SEO.COMPANY_NAME} 운세 ${content.data.name}`,
      description,
      url: `${process.env.APP_URL}/contents/${params.id}/result/${params.purchaseId}`,
      locale: 'ko',
      type: 'website',
      siteName: 'fortune hankyung contents',
      images: `${content.data.banner || process.env.APP_IMAGE_URL + DEFAULT_THUMBNAIL_PATH}`,
    },
  };
}

export default async function ContentResultPage() {
  return <ContentResult />;
}

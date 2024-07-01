'use client';

import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useParams } from 'next/navigation';
import styled from 'styled-components';
import useAlert from '@module/hooks/common/useAlert';
import withContentForm from '@module/hoc/content/withContentForm';
import useContentDetailData from '@module/hooks/content/useContentDetailData';
import useMounted from '@module/hooks/common/useMounted';
import ContentForm from '@/app/m/contents/[id]/components/Form';
import ContentHeader from '@/app/m/contents/[id]/components/Header';
import RelatedContent from './RelatedContent';

const Loading = dynamic(
  () => import('@module/components/Common/Popup/Loading'),
  {
    ssr: false,
  }
);

const Layout = styled.div`
  border-top: 1px solid #e3e3e3;
  padding-bottom: 20px;
`;

const Form = withContentForm(ContentForm);

function ContentDetail() {
  const params = useParams();
  const { renderMessage, setAlertOptions } = useAlert();
  const mounted = useMounted();
  const id = Number(params.id || 0);

  const {
    data: contentData,
    isLoading,
    isFetched,
    isError,
  } = useContentDetailData({
    id,
    setAlertOptions,
  });

  useEffect(() => {
    document.body.style.paddingBottom = '85px';

    return () => {
      document.body.style.paddingBottom = '0px';
    };
  }, []);

  if (isLoading || !isFetched || !mounted) return <Loading isOpen />;
  if (isError) return renderMessage();

  return (
    <Layout>
      <ContentHeader content={contentData} />
      <Form content={contentData} />
      <RelatedContent content={contentData} />
      {/* <ContentFeedback /> */}
    </Layout>
  );
}

export default ContentDetail;

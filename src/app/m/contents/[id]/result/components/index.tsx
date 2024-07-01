import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { ContentTypeE } from '@module/types/content';
import { ContentResultT } from '@module/types/content/result';
import {
  ContentBox,
  ResultLayout,
} from '@/app/m/contents/[id]/result/components/Result.styled';
import SajuResult from '@/app/m/contents/[id]/result/components/Saju';
import ContentFooter from '@/app/m/contents/[id]/result/components/Footer';
import TarotResult from '@/app/m/contents/[id]/result/components/Tarot';
import BottomPopup from './BottomPopup';
import RelatedContent from '../../components/RelatedContent';

interface Props {
  data: ContentResultT;
  isShare: boolean;
}

function ContentResult({ data, isShare }: Props) {
  const { content, purchase, parents, saju } = data;
  const params = useParams();
  const id = Number(params.id || 0);

  const isContentShowPopup = id === 40 || id === 39;

  const renderResult = () => {
    switch (content?.type.name) {
      case ContentTypeE.Saju:
        return (
          <SajuResult
            content={content}
            purchase={purchase}
            parents={parents}
            saju={saju}
          />
        );
      case ContentTypeE.Tarot:
        return <TarotResult parents={parents} purchase={purchase} />;
      default:
        return null;
    }
  };

  useEffect(() => {
    document.body.style.paddingBottom = '100px';

    return () => {
      document.body.style.paddingBottom = '0';
    };
  }, []);

  /* TODO: 피드백 사용시 주석 제거
  const feedbackTitle = useMemo(
    () => (
      <>
        방금 보신 {'<'}
        {content.name}
        {'>'} 콘텐츠는 어떠셨나요?
        <br />
        {purchase.name || ''}님의 후기를 나누어주세요!
      </>
    ),
    [content.name, purchase.name]
  );
   */

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY || window.pageYOffset;
      const scrollHeightMax = document.documentElement.scrollHeight;

      // Check if user has scrolled more than 50% of viewport height
      const isScrolledPastThreshold =
        (scrollPosition + windowHeight) / scrollHeightMax >= 0.5;

      if (isContentShowPopup && isScrolledPastThreshold && !showPopup) {
        setShowPopup(true);
      } else if (!isScrolledPastThreshold && showPopup) {
        setShowPopup(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showPopup]);

  return (
    <ResultLayout>
      <ContentBox>{renderResult()}</ContentBox>

      {/* <ContentFeedback title={feedbackTitle} isFeedbackAction={!isShare} /> */}
      <RelatedContent content={content} />
      <ContentFooter isShare={isShare} content={content} purchase={purchase} />
      {showPopup ? <BottomPopup /> : null}
    </ResultLayout>
  );
}

export default ContentResult;

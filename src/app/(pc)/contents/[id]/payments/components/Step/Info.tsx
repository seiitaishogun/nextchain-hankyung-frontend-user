import { numberWithCommas } from '@module/utils/number';
import {
  InfoContentName,
  InfoContentPrice,
  InfoDescription,
  InfoTitle,
  InfoContentOldPrice,
  InfoContentDiscountPriceWrap,
  InfoContentDiscountPrice,
  InfoContentDiscountPercent,
} from '@/app/(pc)/contents/[id]/payments/components/Step/styled';
import { StepInfoProps } from '@/app/(pc)/contents/[id]/payments/components/Step/types';

function StepInfo({ content }: StepInfoProps) {
  const priceText =
    content.price > 0 ? `${numberWithCommas(content.price)}원` : `무료`;

  return (
    <div>
      <InfoTitle>한국경제 운세</InfoTitle>
      <InfoContentName>{content.name}</InfoContentName>
      {content.is_discount && content.discount_price > 0 ? (
        <>
          <InfoContentOldPrice>{priceText}</InfoContentOldPrice>
          <InfoContentDiscountPriceWrap>
            <InfoContentDiscountPrice>
              {numberWithCommas(content.discount_price)}원
            </InfoContentDiscountPrice>
            <InfoContentDiscountPercent>
              {content.discount_percent}%
            </InfoContentDiscountPercent>
          </InfoContentDiscountPriceWrap>
        </>
      ) : (
        <InfoContentPrice>{priceText}</InfoContentPrice>
      )}
      <InfoDescription>자세한 풀이 내용을 확인하세요</InfoDescription>
    </div>
  );
}

export default StepInfo;

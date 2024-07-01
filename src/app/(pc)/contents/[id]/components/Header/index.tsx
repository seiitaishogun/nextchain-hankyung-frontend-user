import React, { useState } from 'react';
import Image from 'next/image';
import { useRecoilValue } from 'recoil';
import { contentLikeSelector } from '@module/store/content/like';
import useAlert from '@module/hooks/common/useAlert';
import useUpdateContentLike from '@module/hooks/content/useUpdateContentLike';
import useShare from '@module/hooks/common/useShare';
import Popup from '@module/components/Common/Popup';
import { DEFAULT_THUMBNAIL_LARGE_PATH } from '@/app/(pc)/constants/image';
import {
  ContentBanner,
  ContentDescription,
  ContentHeaderLayout as Layout,
  ContentName,
  ContentVariety,
  ContentPreviewButton,
  ContentButtonBox,
  ContentShareButton,
  ContentLikeButton,
  ContentNameBox,
} from '@/app/(pc)/contents/[id]/components/Header/styled';
import ContentCategory from '@/app/(pc)/contents/[id]/components/Header/Category';
import ContentCount from '@/app/(pc)/contents/[id]/components/Header/Count';
import { ContentHeaderProps } from '@/app/(pc)/contents/[id]/components/Header/types';
import ContentSample from '@/app/(pc)/contents/[id]/components/Sample';
import Share from '@/app/(pc)/components/Share';

function ContentHeader({ content }: ContentHeaderProps) {
  const [isPopup, setIsPopup] = useState(false);
  const { renderMessage, setAlertOptions, handleReset } = useAlert();
  const isLike = useRecoilValue(contentLikeSelector(content.id));
  const { handleUpdateLike } = useUpdateContentLike({
    content,
    setAlertOptions,
    handleReset,
    isUpdateQuery: true,
  });

  const description = `${content.name}에 관한 이야기를 보러가실래요?`;
  const { handleShare, renderShare } = useShare({
    kakaoOptions: {
      name: content.name,
      image: content.banner_mobile || undefined,
      description,
    },
    ShareComponent: Share,
  });

  const handleOpen = () => {
    setIsPopup(true);
  };

  const handleClose = () => {
    setIsPopup(false);
  };

  return (
    <>
      <Layout>
        <ContentCategory
          type={content.type.description}
          category={content.category?.name}
        />

        <ContentNameBox>
          <ContentName>{content.name.slice(0, 40)}</ContentName>

          {content.sample ? (
            <div>
              <ContentPreviewButton type="button" onClick={handleOpen}>
                결과 예시 보기
              </ContentPreviewButton>

              <Popup isOpen={isPopup}>
                <ContentSample content={content} handleClose={handleClose} />
              </Popup>
            </div>
          ) : (
            <div />
          )}
        </ContentNameBox>

        <ContentVariety>
          <ContentCount
            like_count={content.like_count}
            share_count={content.share_count}
            view_count={content.view_count}
            isPay={content.price > 0}
          />

          <ContentButtonBox>
            <ContentLikeButton
              type="button"
              $isLike={isLike}
              onClick={handleUpdateLike}
            >
              <span>좋아요</span>
            </ContentLikeButton>

            <ContentShareButton type="button" onClick={handleShare}>
              <span>공유하기</span>
            </ContentShareButton>
          </ContentButtonBox>
        </ContentVariety>

        <ContentBanner>
          <Image
            src={content.banner || DEFAULT_THUMBNAIL_LARGE_PATH}
            alt=""
            fill
          />
        </ContentBanner>

        <ContentDescription
          dangerouslySetInnerHTML={{ __html: content.contents }}
        />
      </Layout>

      {renderMessage()}
      {renderShare()}
    </>
  );
}

export default ContentHeader;

import React, { Dispatch, SetStateAction, useCallback, useState } from 'react';
import { Modal } from '@mui/material';
import Snackbar from '@module/components/Common/Snackbar';
import { KakaoShareOptions } from '@module/types/common/share';
import {
  Layout,
  ShareSocial,
  ShareTitle,
} from '@/app/(pc)/components/Share/Share.styled';
import ShareLink from '@/app/(pc)/components/Share/Term/Link';
import ShareKakao from '@/app/(pc)/components/Share/Term/Kakao';

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  url: string;
  kakaoOptions: KakaoShareOptions;
}

function Share({ isOpen, setIsOpen, url, kakaoOptions }: Props) {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const handlePopupClose = useCallback(() => setIsOpen(false), []);

  return (
    // TODO: Popup 컴포넌트 스타일 수정후 연동
    <>
      <Modal
        open={isOpen}
        onClose={handlePopupClose}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          boxSizing: 'border-box',
        }}
      >
        <Layout>
          <ShareTitle>친구에게 공유하기</ShareTitle>
          <ShareSocial>
            <ShareKakao url={url} setIsOpen={setIsOpen} {...kakaoOptions} />
            <ShareLink
              url={url}
              setOpenSnackbar={setOpenSnackbar}
              setIsOpen={setIsOpen}
            />
          </ShareSocial>
        </Layout>
      </Modal>

      <Snackbar
        isOpen={openSnackbar}
        setIsOpen={setOpenSnackbar}
        message="클립보드에 링크가 복사되었어요."
      />
    </>
  );
}

export default Share;

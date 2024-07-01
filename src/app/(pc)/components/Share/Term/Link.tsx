import { Dispatch, SetStateAction, useCallback } from 'react';
import copy from 'copy-to-clipboard';
import { ShareSocialItem } from '@/app/(pc)/components/Share/Share.styled';

interface Props {
  url: string;
  setOpenSnackbar: Dispatch<SetStateAction<boolean>>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

function ShareLink({ url, setOpenSnackbar, setIsOpen }: Props) {
  const handleCopy = useCallback(() => {
    copy(url);
    setOpenSnackbar(true);
    setIsOpen(false);
  }, [url]);

  return (
    <ShareSocialItem
      image={`${process.env.APP_IMAGE_URL}/pc/common/share_link.svg`}
      onClick={handleCopy}
    />
  );
}

export default ShareLink;

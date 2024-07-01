'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import useAlert from '@module/hooks/common/useAlert';

function PaymentError() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { renderMessage, setAlertOptions } = useAlert();

  useEffect(() => {
    const message = searchParams.get('message') || '오류가 발생 했습니다.';

    setAlertOptions({
      isOpen: true,
      description: message,
      handleConfirm: () => {
        router.replace('/m');
      },
    });
  }, []);

  return <>{renderMessage()}</>;
}

export default PaymentError;

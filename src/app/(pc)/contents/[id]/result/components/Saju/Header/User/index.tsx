import UserInfoItem from '@/app/(pc)/contents/[id]/result/components/Saju/Header/User/Item';
import { UserInfoLayout as Layout } from '@/app/(pc)/contents/[id]/result/components/Saju/Header/User/styled';
import {
  UserInfoProps,
  UserT,
} from '@/app/(pc)/contents/[id]/result/components/Saju/Header/User/types';

function ContentUserInfo({ purchase, saju }: UserInfoProps) {
  const isPartner = !!purchase.partner;

  return (
    <Layout>
      <UserInfoItem user={purchase as UserT} saju={saju[0]} />
      {isPartner && (
        <UserInfoItem user={purchase.partner as UserT} saju={saju[1]} />
      )}
    </Layout>
  );
}

export default ContentUserInfo;

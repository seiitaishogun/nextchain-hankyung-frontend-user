import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { getContentURL } from '@module/utils/url';
import { DEFAULT_THUMBNAIL_PATH } from '@/app/(pc)/constants/image';
import { MAIN_SUB_DATA } from '@/app/(pc)/data/main';
import Title from '@/app/(pc)/components/Title';

const Layout = styled.article`
  display: flex;
  flex-direction: row;
  gap: 1.9090909091%;
  justify-content: space-between;
  overflow: hidden;
  width: ${props => props.theme.desktopDeviceWidth};
  margin: 2px auto 0;
  padding: 24px 0 22px;
  border-top: 1px solid ${props => props.theme.colors.black};
  border-bottom: 4px solid ${props => props.theme.colors.black};
`;

const LargeContent = styled.div`
  position: relative;
  width: 66%;

  img {
    position: relative !important;
    margin-top: 18px;
    border-radius: 10px;
    // width: 100%
  }
`;

const LargeContentName = styled.h4`
  margin-top: 22px;
  font-size: 32px;
  font-weight: bold;
  line-height: normal;
  text-align: center;
`;

const LargeContentSummary = styled.p`
  margin-top: 5px;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
`;

const ContentSection = styled.div`
  width: 32.0909090909%;
  img {
    position: relative !important;
    margin-top: 16px;
    border-radius: 10px;
  }
`;

const ContentName = styled.h5`
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ContentDescription = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-top: 27px;
  font-size: 20px;
  line-height: normal;
  white-space: normal;
  word-break: keep-all;
`;

function SubBanner() {
  const firstData = MAIN_SUB_DATA[0];
  const otherData = MAIN_SUB_DATA[1];

  return (
    <Layout>
      <LargeContent>
        <Title text="누구보다 완벽한 3월을 위해" href="/categories/2" />
        <Link href={getContentURL(firstData.id)} prefetch={false}>
          <Image
            src={firstData.thumbnail || DEFAULT_THUMBNAIL_PATH}
            alt=""
            // width={726}
            // height={272}
            layout="fill"
          />
          <LargeContentName>{firstData.name}</LargeContentName>
          <LargeContentSummary>{firstData.summary}</LargeContentSummary>
        </Link>
      </LargeContent>

      <ContentSection>
        <Link href={getContentURL(otherData.id)} prefetch={false}>
          <ContentName>{otherData.name}</ContentName>
          <Image
            src={otherData.thumbnail || DEFAULT_THUMBNAIL_PATH}
            alt=""
            // width={353}
            // height={272}
            layout="fill"
          />
          <ContentDescription>{otherData.summary}</ContentDescription>
        </Link>
      </ContentSection>
    </Layout>
  );
}

export default SubBanner;

import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { getContentURL } from '@module/utils/url';
import { DEFAULT_THUMBNAIL_PATH } from '@/app/(pc)/constants/image';
import { MAIN_TOP_DATA } from '@/app/(pc)/data/main';

const Layout = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow: hidden;
  width: ${props => props.theme.desktopDeviceWidth};
  margin: 0 auto;
  padding-bottom: 22px;
  border-bottom: 4px solid ${props => props.theme.colors.black};
`;

const LargeContent = styled.div`
  position: relative;
  width: ${props => props.theme.contentWidth};

  img {
    border-radius: 10px;
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
  border-top: 4px solid ${props => props.theme.colors.black};

  img {
    border-radius: 10px;
  }
`;

const ContentName = styled.h5`
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  align-items: center;
  height: 60px;
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

function TopBanner() {
  const firstData = MAIN_TOP_DATA[0];
  const otherData = MAIN_TOP_DATA[1];
  return (
    <Layout>
      <LargeContent>
        <Link href={getContentURL(firstData.id)} prefetch={false}>
          <Image
            src={firstData.thumbnail || DEFAULT_THUMBNAIL_PATH}
            alt=""
            width={726}
            height={336}
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
            width={353}
            height={272}
          />
          <ContentDescription>{otherData.summary}</ContentDescription>
        </Link>
      </ContentSection>
    </Layout>
  );
}

export default TopBanner;

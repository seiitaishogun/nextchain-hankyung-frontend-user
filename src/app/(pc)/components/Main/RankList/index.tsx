import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { getContentURL } from '@module/utils/url';
import useContentList from '@module/hooks/content/useContentList';
import Title from '@/app/(pc)/components/Title';

interface Props {
  title: string;
}

const Layout = styled.article`
  overflow: hidden;
  width: ${props => props.theme.desktopDeviceWidth};
  margin: 2px auto 0;
  padding: 24px 0 12px;
  border-top: 1px solid ${props => props.theme.colors.black};
  border-bottom: 4px solid ${props => props.theme.colors.black};
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 318px);
  grid-template-rows: repeat(3, 1fr);
  gap: 0 73px;
  grid-auto-flow: column;

  li {
    padding: 20px 0;
    border-bottom: 1px solid #e5e5e5;

    &:nth-child(3n) {
      border-bottom: 0;
    }
  }

  li a {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 170px;
  padding: 0 16px 0 29px;
`;

const ListCount = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ListName = styled.h5`
  overflow: hidden;
  font-size: 18px;
  line-height: normal;
  letter-spacing: normal;
  color: ${props => props.theme.colors.black};
  text-overflow: ellipsis;
  white-space: wrap;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const ListThumbnail = styled.div`
  overflow: hidden;
  position: relative;
  width: 94px;
  height: 60px;
  border-radius: 10px;

  img {
    position: relative !important;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      z-index: 100;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
    }
  }
`;

function RankList({ title }: Props) {
  const rankList = useContentList({ limit: 9 });
  return (
    <Layout>
      <Title text={title} href="/contents" />

      <List>
        {rankList.data.map((d: any, i: number) => (
          <li key={d.id}>
            <Link href={getContentURL(d.id)} prefetch={false}>
              <ListCount>{i + 1}</ListCount>
              <FlexBox>
                <ListName>{d.name}</ListName>
              </FlexBox>
              <ListThumbnail>
                <Image src={d.thumbnail} alt={d.name} width={94} height={60} />
              </ListThumbnail>
            </Link>
          </li>
        ))}
      </List>
    </Layout>
  );
}

export default RankList;

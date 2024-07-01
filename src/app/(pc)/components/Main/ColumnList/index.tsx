import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { getContentURL } from '@module/utils/url';
import { DEFAULT_THUMBNAIL_PATH } from '@/app/(pc)/constants/image';
import { COLUMN_DATA } from '@/app/(pc)/data/main';
import Title from '@/app/(pc)/components/Title';

const Layout = styled.article`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
  width: ${props => props.theme.desktopDeviceWidth};
  margin: 2px auto 0;
  padding: 24px 32px;
  border-top: 1px solid ${props => props.theme.colors.black};
  background: #f8f4fc;
`;

const LargeContent = styled.div`
  position: relative;

  img {
    margin-top: 18px;
    border-radius: 10px;
  }
`;

const ContentBox = styled.div`
  width: 518px;
`;

const SubTitle = styled.h4`
  overflow: hidden;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 18px;

  li {
    margin-top: 20px;

    &:first-child {
      margin-top: 0;
    }

    a {
      display: flex;
      flex-direction: row;
      overflow: hidden;
      box-sizing: border-box;
    }

    .flex-box {
      display: flex;
      flex-direction: column;
      width: calc(100% - 183px);
    }

    .row-list-thumbnail {
      overflow: hidden;
      margin-right: 23px;
      border-radius: 10px;
    }

    h5 {
      overflow: hidden;
      margin-top: 10px;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    p {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      margin-top: 3px;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      white-space: normal;
    }
  }
`;

function ColumnList() {
  const [hoverIndex, setHoverIndex] = useState<number>(0);

  const handleMouseEnter = (index: number) => {
    setHoverIndex(index);
  };

  const selectedContent = COLUMN_DATA[hoverIndex];

  return (
    <Layout>
      <LargeContent>
        <Title text="재물운" href="/categories/4" />

        <Link href={getContentURL(selectedContent.id)} prefetch={false}>
          <Image
            src={selectedContent.thumbnail || DEFAULT_THUMBNAIL_PATH}
            alt={selectedContent.name}
            width={486}
            height={346}
          />
        </Link>
      </LargeContent>

      <ContentBox>
        <SubTitle>한 끗 차이로 부자가 되는 방법은</SubTitle>
        <List>
          {COLUMN_DATA.map((d: any, i: number) => (
            <li key={d.id} onMouseEnter={() => handleMouseEnter(i)}>
              <Link href={getContentURL(d.id)} prefetch={false}>
                <div className="row-list-thumbnail">
                  <Image
                    src={d.thumbnail || DEFAULT_THUMBNAIL_PATH}
                    alt=""
                    width={160}
                    height={102}
                  />
                </div>
                <div className="flex-box">
                  <h5>{d.name}</h5>
                  <p dangerouslySetInnerHTML={{ __html: d.summary }} />
                </div>
              </Link>
            </li>
          ))}
        </List>
      </ContentBox>
    </Layout>
  );
}

export default ColumnList;

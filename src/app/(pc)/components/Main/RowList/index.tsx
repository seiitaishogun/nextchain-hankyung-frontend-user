import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import useContentList from '@module/hooks/content/useContentList';
import { ContentListLimit } from '@module/types/content/list';
import { getContentURL } from '@module/utils/url';
import { DEFAULT_THUMBNAIL_PATH } from '@/app/(pc)/constants/image';

const Layout = styled.article`
  overflow: hidden;
  width: ${props => props.theme.desktopDeviceWidth};
  margin: 2px auto 0;
  padding: 24px 0;
  border-top: 1px solid ${props => props.theme.colors.black};
  border-bottom: 4px solid ${props => props.theme.colors.black};
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0 24px;

  li {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    box-sizing: border-box;

    h5 {
      overflow: hidden;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .row-list-thumbnail {
      overflow: hidden;
      margin-top: 10px;
      border-radius: 10px;
    }

    p {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      margin-top: 15px;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      white-space: normal;
    }
  }
`;

function RowList() {
  const rankList = useContentList({ limit: 4 });
  return (
    <Layout>
      <List>
        {rankList.data.map((d: ContentListLimit) => (
          <li key={d.id}>
            <Link href={getContentURL(d.id)} prefetch={false}>
              <h5>
                {d.category} / {d.type_description}
              </h5>
              <div className="row-list-thumbnail">
                <Image
                  src={d.thumbnail || DEFAULT_THUMBNAIL_PATH}
                  alt=""
                  width={257}
                  height={164}
                />
              </div>
              <p dangerouslySetInnerHTML={{ __html: d.name }} />
            </Link>
          </li>
        ))}
      </List>
    </Layout>
  );
}

export default RowList;

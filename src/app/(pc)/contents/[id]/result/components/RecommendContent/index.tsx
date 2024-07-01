import Link from 'next/link';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { fetchMainTop } from '@module/api/main';
import Title from '@/app/(pc)/components/Title';

const RecommendContentLayout = styled.article`
  box-sizing: border-box;
  width: 100%;
  margin-top: 40px;
  padding-top: 38px;
  border-top: 2px solid ${props => props.theme.colors.black};
`;

const RecommendContentBox = styled.div`
  width: 100%;

  ul {
    margin-top: 25px;

    li {
      padding: 14px 0;
      border-top: 1px solid ${props => props.theme.colors.gray100};
      line-height: 29px;

      &:last-child {
        border-bottom: 1px solid ${props => props.theme.colors.gray100};
      }

      a {
        display: inline;
        overflow: hidden;
        vertical-align: top;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: ${props => props.theme.colors.black100};
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
`;

function RecommendContent() {
  const { data } = useQuery(['mainTop'], fetchMainTop, {
    select: res => res.data,
    initialData: {
      data: [],
    },
  });

  return (
    <RecommendContentLayout>
      <RecommendContentBox>
        <Title text="다른 운세 보기" href="/categories" />

        <ul>
          {data.map(d => (
            <li key={d.id}>
              <Link href={`/contents/${d.id}`} prefetch={false}>
                {d.name}
              </Link>
            </li>
          ))}
        </ul>
      </RecommendContentBox>
    </RecommendContentLayout>
  );
}

export default RecommendContent;

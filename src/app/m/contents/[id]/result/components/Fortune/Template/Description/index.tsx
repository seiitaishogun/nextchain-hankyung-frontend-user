import React from 'react';
import styled from 'styled-components';
import { ChildLayout } from '@/app/m/contents/[id]/result/components/Result.styled';
import Summary from '@/app/m/contents/[id]/result/components/Fortune/Template/Summary';

const SubBox = styled(ChildLayout)`
  margin-top: 0;
  padding-top: 26px;
  border-top: 1px solid rgba(0, 0, 0, 0.08);

  p {
    margin-top: 6px;
    font-weight: normal;
    line-height: 19px;
    word-break: normal;
  }
`;

interface Props {
  sign?: string | null;
  subName: string;
  name: string;
  summary: string;
  contents: string;
}

function Description({ sign, subName, name, summary, contents }: Props) {
  return (
    <div>
      <Summary name={name} summary={summary} />

      <SubBox sign={sign}>
        <h4 dangerouslySetInnerHTML={{ __html: subName }} />
        <p dangerouslySetInnerHTML={{ __html: contents }} />
      </SubBox>
    </div>
  );
}

export default Description;

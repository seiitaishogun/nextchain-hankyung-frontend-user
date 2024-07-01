import React from 'react';
import styled, { css } from 'styled-components';
import { ChildLayout } from '@/app/(pc)/contents/[id]/result/components/Result.styled';
import Summary from '@/app/(pc)/contents/[id]/result/components/Fortune/Template/Summary';

const SubBox = styled(ChildLayout)`
  margin-top: 0;
  padding-top: 35px;
  border-top: 2px solid ${props => props.theme.colors.black};
  text-align: center;
  h4 {
    font-size: 20px;
    font-weight: bold;
    line-height: normal;
    color: ${props => props.theme.colors.black100};

    ${props =>
      props.sign &&
      css`
        padding-bottom: 108px;
        background: url('${props.theme
            .imageUrl}/pc/content/icon/${props.sign}.webp')
          no-repeat center bottom 6px;
        background-size: 96px 96px;
      `}
  }

  p {
    margin-top: 15px;
    font-weight: normal;
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

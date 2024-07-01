import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import Link from 'next/link';

interface Props {
  text: string;
  className?: string;
  href: string;
}

function Title({ text, className, href }: Props) {
  return (
    <TitleLayout className={classNames(className, 'title')}>
      <Link href={href}>{text}</Link>
    </TitleLayout>
  );
}

export default Title;

const TitleLayout = styled.h4`
  font-size: 20px;
  font-weight: bold;
  line-height: normal;

  a {
    display: inline-block;
    color: ${props => props.theme.colors.black100};
  }

  &:after {
    content: '';
    display: inline-block;
    width: 7px;
    height: 13px;
    margin: 6px 0 0 8px;
    background: url(${props =>
        `${props.theme.imageUrl}/pc/common/arrow_right.webp`})
      no-repeat center center;
    background-size: 7px 13px;
  }
`;

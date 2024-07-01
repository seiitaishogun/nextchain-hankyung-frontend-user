import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

interface Props {
  text: string;
  className?: string;
}

function TextTitle({ text, className }: Props) {
  return (
    <TitleLayout className={classNames(className, 'title')}>{text}</TitleLayout>
  );
}

export default TextTitle;

const TitleLayout = styled.h4`
  padding-top: 22px;
  border-top: 2px solid ${props => props.theme.colors.black};
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

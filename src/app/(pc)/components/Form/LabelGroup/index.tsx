import React from 'react';
import styled, { css } from 'styled-components';

type Direction = 'row' | 'column';

interface Props {
  id: string;
  labelText: string;
  direction?: Direction;
  className?: string;
  children: React.ReactNode;
}

const Layout = styled.div<{ direction?: Direction }>`
  display: flex;
  flex-direction: column;
  margin-top: 16px;

  &:first-child {
    margin-top: 0;
  }

  > label {
    width: 100%;
    font-weight: normal;
    font-size: 18px;
    color: ${props => props.theme.colors.black100};
  }

  > div {
    display: flex;
    width: 100%;
    margin-top: 6px;
  }

  ${props =>
    props.direction === 'row' &&
    css`
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      > label {
        width: 68px;
        text-align: left;
      }

      > div {
        margin-top: 0;
        width: calc(100% - 80px);
      }
    `}
`;

function LabelGroup({ id, labelText, direction, className, children }: Props) {
  return (
    <Layout className={className} direction={direction}>
      <label htmlFor={id}>{labelText}</label>
      <div>{children}</div>
    </Layout>
  );
}

export default LabelGroup;

import React from 'react';
import styled from 'styled-components';
import { Control, useController } from 'react-hook-form';

interface Props {
  name: string;
  control: Control<any>;
  handleChange?: () => void;
}

const Layout = styled.input`
  appearance: none;
  position: relative;
  width: 22px;
  height: 22px;
  background: #fff;
  margin-right: 6px;
  border: 1px solid ${props => props.theme.colors.placeholder};
  border-radius: 4px;
  cursor: pointer;

  &:checked {
    border: 0;
    background: url(${props =>
        `${props.theme.imageUrl}/pc/common/check_on.webp`})
      no-repeat center center ${props => props.theme.colors.gray500};
    background-size: 16px 16px;
  }
`;

function Checkbox({ name, control, handleChange }: Props) {
  const {
    field: { onChange, value: checkedValue },
  } = useController({
    name,
    control,
  });

  return (
    <Layout
      type="checkbox"
      id={name}
      name={name}
      checked={checkedValue}
      onChange={e => {
        if (handleChange) handleChange();
        onChange(e.target.checked);
      }}
    />
  );
}

export default Checkbox;

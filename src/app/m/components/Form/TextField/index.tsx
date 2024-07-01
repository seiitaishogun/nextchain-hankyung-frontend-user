import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { Control, useController } from 'react-hook-form';

const Layout = styled.input`
  width: 100%;
  height: 48px;
  margin: 0;
  padding: 0 12px;
  border: 1px solid ${props => props.theme.colors.borderGray};
  border-radius: 6px;
  font-size: 16px;
  font-weight: normal;
  color: ${props => props.theme.colors.black100};
  outline: none;

  &::placeholder {
    color: ${props => props.theme.colors.placeholder};
  }
`;

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  control: Control<any>;
}

function TextField({ control, name, type, ...props }: Props) {
  const {
    field: { onChange, value },
  } = useController({
    name,
    control,
  });
  return (
    <Layout
      type={type || 'text'}
      {...props}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}

export default TextField;

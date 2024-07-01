import React from 'react';
import styled from 'styled-components';
import { useController } from 'react-hook-form';
import { SingleRadioProps } from '@/app/m/components/Form/Radio/types';

const Layout = styled.label`
  width: calc(50% - 4px);
  cursor: pointer;

  input {
    display: none;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 48px;
    border-radius: 6px;
    border: 1px solid ${props => props.theme.colors.borderGray};
    background-color: ${props => props.theme.colors.white};
    font-size: 16px;
    color: ${props => props.theme.colors.placeholder};
  }

  input:checked + span {
    border-color: ${props => props.theme.colors.primary};
    font-weight: bold;
    background-color: #f7f2ff;
    color: ${props => props.theme.colors.primary};
  }
`;

function SingleRadio({ name, value, control, text }: SingleRadioProps) {
  const {
    field: { onChange, value: checkedValue },
  } = useController({
    name,
    control,
  });

  return (
    <Layout>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checkedValue === value.toString()}
        onChange={onChange}
      />
      <span>{text}</span>
    </Layout>
  );
}

export default SingleRadio;

import React from 'react';
import styled from 'styled-components';
import SingleRadio from '@/app/m/components/Form/Radio/SingleRadio';
import { MultiRadioProps } from '@/app/m/components/Form/Radio/types';

const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
`;

function MultiRadio({ radios, ...props }: MultiRadioProps) {
  return (
    <Layout>
      {radios.map(radio => (
        <SingleRadio key={radio.value} {...props} {...radio} />
      ))}
    </Layout>
  );
}

export default MultiRadio;

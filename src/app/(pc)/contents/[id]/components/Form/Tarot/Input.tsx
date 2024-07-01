import React from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import { getName } from '@module/utils/content/form';
import { GENDER_OPTION } from '@module/constants/user';
import LabelGroup from '@/app/(pc)/components/Form/LabelGroup';
import TextField from '@/app/(pc)/components/Form/TextField';
import MultiRadio from '@/app/(pc)/components/Form/Radio';

interface Props {
  isUser: boolean;
}

const Layout = styled.fieldset`
  label {
    text-align: center;
  }
`;

function TarotInput({ isUser }: Props) {
  const { control } = useFormContext();

  return (
    <Layout>
      <LabelGroup id="name" labelText="이름">
        <TextField
          control={control}
          name={getName({
            property: 'name',
            isUser,
          })}
          placeholder="이름을 입력해주세요"
        />
      </LabelGroup>

      <LabelGroup id="gender" labelText="성별">
        <MultiRadio
          control={control}
          name={getName({
            property: 'gender',
            isUser,
          })}
          radios={GENDER_OPTION}
        />
      </LabelGroup>
    </Layout>
  );
}

export default TarotInput;

import React from 'react';
import UserForm from '@/app/m/components/Form/UserForm';
import {
  FormDescription,
  FormLayout,
} from '@/app/m/contents/[id]/payments/components/Step/styled';
import { StepFormProps } from '@/app/m/contents/[id]/payments/components/Step/types';

function StepForm({ control }: StepFormProps) {
  return (
    <FormLayout>
      <FormDescription>
        * 다시보기를 위해 정확한 정보를 입력해주세요.
      </FormDescription>

      <UserForm control={control} />
    </FormLayout>
  );
}

export default StepForm;

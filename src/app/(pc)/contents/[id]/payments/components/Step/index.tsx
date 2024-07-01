import { useCallback, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import Navigation from '@/app/(pc)/contents/[id]/payments/components/Step/Navigation';
import StepInfo from '@/app/(pc)/contents/[id]/payments/components/Step/Info';
import StepForm from '@/app/(pc)/contents/[id]/payments/components/Step/Form';
import { FormStepLayout } from '@/app/(pc)/contents/[id]/payments/components/Step/styled';
import { StepProps } from '@/app/(pc)/contents/[id]/payments/components/Step/types';
import FormButton from '@/app/(pc)/contents/[id]/payments/components/Step/Button';

function FormStep({ content, handleFormSubmit }: StepProps) {
  const [step, setStep] = useState(0);
  const {
    control,
    formState: { isValid },
  } = useFormContext();

  const renderStep = () => {
    switch (step) {
      case 0:
        return <StepInfo content={content} />;
      case 1:
        return <StepForm control={control} />;
      default:
        return null;
    }
  };

  const getFormButtonProps = useCallback(() => {
    switch (step) {
      case 0:
        return {
          isValid: true,
          onClick: () => setStep(1),
        };
      case 1:
        return {
          isValid,
          text: '결제하기',
          onClick: () => handleFormSubmit(),
        };
      default:
        return {
          isValid: false,
          onClick: () => setStep(0),
        };
    }
  }, [step, isValid]);

  return (
    <FormStepLayout>
      <Navigation step={step} />

      {renderStep()}

      <FormButton {...getFormButtonProps()} />
    </FormStepLayout>
  );
}

export default FormStep;

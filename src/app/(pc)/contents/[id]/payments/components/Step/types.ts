import { Control } from 'react-hook-form';
import { ContentDetailT } from '@module/types/content/detail';

interface StepProps {
  content: ContentDetailT;
  handleFormSubmit: () => void;
}

interface StepInfoProps {
  content: ContentDetailT;
}

interface StepFormProps {
  control: Control<any>;
}

export type { StepProps, StepInfoProps, StepFormProps };

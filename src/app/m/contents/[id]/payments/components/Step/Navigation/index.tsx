import {
  StepNavigationItem,
  StepNavigationLayout as Layout,
} from '@/app/m/contents/[id]/payments/components/Step/Navigation/styled';
import { StepNavigationProps } from '@/app/m/contents/[id]/payments/components/Step/Navigation/types';

const NAVIGATION_OPTION = Array.from({ length: 2 }, (_, i) => i);

function StepNavigation({ step }: StepNavigationProps) {
  return (
    <Layout>
      {NAVIGATION_OPTION.map(i => (
        <StepNavigationItem key={i} $isActive={step === i} />
      ))}
    </Layout>
  );
}

export default StepNavigation;

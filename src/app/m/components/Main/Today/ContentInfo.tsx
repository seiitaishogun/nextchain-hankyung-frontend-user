import {
  TodayContentInfoLayout,
  TodayContentName,
  TodayContentSummary,
} from '@/app/m/components/Main/Today/styled';
import { MainDetailProps } from '@/app/m/components/Main/types';

function ContentInfo({ data }: MainDetailProps) {
  return (
    <TodayContentInfoLayout>
      <TodayContentSummary>{data?.summary}</TodayContentSummary>
      <TodayContentName>{data?.name}</TodayContentName>
    </TodayContentInfoLayout>
  );
}

export default ContentInfo;
